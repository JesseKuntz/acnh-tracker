import { h } from 'preact';

import SettingsContent from './settings-content';

import { renderSpinner } from '../../components/support/render-spinner';
import { dataExists } from '../../components/support/data-exists';

import style from './style';

function Settings({ data, isLoading, accountRef }) {
  return (
    <div class={style.settings}>
      <div class={style['title-row']}>
        <h1 class={style.title}>Settings</h1>
        {renderSpinner(isLoading)}
      </div>

      {dataExists(data) ? (
        <SettingsContent data={data} accountRef={accountRef} />
      ) : (
        !isLoading && (
          <p>
            You have to log in before you can view and/or change your
            settings... so do that!
          </p>
        )
      )}
    </div>
  );
}

export default Settings;
