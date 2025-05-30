import { createContext, ComponentChildren } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { useAuth0 } from "../auth/Auth0Provider";

type CreatureRecord = Record<string, boolean>;

type UserData = {
  // The new MongoDB id
  _id: string;
  // The legacy FaunaDB id
  id: string;
  ts: {
    isoString: string;
  };
  email: string;
  settings: {
    subscribed: boolean;
    northern: boolean;
  };
  fish: CreatureRecord;
  bug: CreatureRecord;
  "sea-creature": CreatureRecord;
};

type Data = {
  userData: UserData;
};

type UserDataContextValue = {
  data: Data | null;
  loading: boolean;
  error: Error | null;
  refetch: (newUserData?: UserData) => void;
};

const UserDataContext = createContext<UserDataContextValue | undefined>(
  undefined
);

const fetchUserData = async (email: string): Promise<UserData> => {
  const response = await fetch(
    `/.netlify/functions/get-single-account?email=${encodeURIComponent(email)}`
  );
  const result = await response.json();

  if (result.data) {
    return result.data;
  } else if (response.status === 200 && email) {
    const newAccountResponse = await fetch(
      `/.netlify/functions/create-account`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const newAccountResult = await newAccountResponse.json();

    if (newAccountResult.data) {
      return newAccountResult.data;
    }

    throw new Error(newAccountResult.error || "Failed to create account");
  }

  throw new Error(result.error || "Failed to fetch user data");
};

export const UserDataProvider = ({
  children,
}: {
  children: ComponentChildren;
}) => {
  const {
    user: auth0User,
    isAuthenticated,
    isLoading: isAuth0Loading,
  } = useAuth0();
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const getUserData = async (newUserData?: UserData) => {
    if (newUserData) {
      setData({ userData: newUserData });
      setLoading(false);
      return;
    }

    if (!isAuthenticated || !auth0User) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userData = await fetchUserData(auth0User.email);
      setData({ userData });
    } catch (err) {
      console.error(error);
      setError(err as Error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, [isAuthenticated, auth0User]);

  const value: UserDataContextValue = {
    data,
    loading: loading || isAuth0Loading,
    error,
    refetch: getUserData,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};
