import { Fragment } from "preact";
import { useRoute } from "preact-iso";

import { SpecimenContainer } from "../../components/specimen/container";
import { renderSpinner } from "../../support/render-spinner";
import { processType } from "../../support/process-type";
import { useUserData } from "../../providers/user-data-provider";

import style from "./style.module.css";

export function Tracker() {
  const { params } = useRoute();

  const processedType = processType(params.type);
  const { data, loading: isLoading } = useUserData();

  return (
    <div class={style.tracker}>
      <div class={style["title-row"]}>
        <h1 class={style.title}>{processedType}</h1>
        {renderSpinner(isLoading)}
      </div>

      {data?.userData ? (
        <Fragment>
          <p>
            Click each {processedType} to mark that you have caught it! Once you
            edit your catches, the save button will be enabled.
          </p>
          <SpecimenContainer
            type={params.type}
            processedType={processedType}
            data={data.userData}
          />
        </Fragment>
      ) : (
        !isLoading && (
          <p>
            Click the log in button above to create an account and start
            tracking your catches!
          </p>
        )
      )}
    </div>
  );
}
