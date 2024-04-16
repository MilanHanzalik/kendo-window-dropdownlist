import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Window } from '@progress/kendo-react-dialogs';
import { EditForm } from '../EditForm';

const segments = [{title:'Segment 1', id: '1'},{title:'Segment 2', id: '2'}];
const projects = [{title:'Project 1', id: '1'},{title:'Project 2', id: '2'}];

const App = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={toggleDialog}
      >
        Open Dialog
      </button>
      {visible && (
          <Window
            title="New Item"
            onClose={toggleDialog}
            initialHeight={765}
            initialWidth={1350}
          >
            <EditForm
              segments={segments}
              projects={projects}
              onSubmit={() => {}}
              onCancel={() => {}}
            />
          </Window>
      )}
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
