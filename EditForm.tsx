import React from 'react'; 
import { Field, Form, FormElement } from '@progress/kendo-react-form';
import { FormDropDownList } from './DropDownLIst';

export interface UidTitle {
  uid: string;
  title: string;
}

export interface IndexTitle {
  id: number;
  title: string;
}

export interface EditFormProps {
  segments: IndexTitle[];
  projects: UidTitle[];
  initialData?: unknown;
  error?: string;
  onSubmit: () => void;
  onCancel: () => void;
}

export const EditForm: React.FC<EditFormProps> = (props) => {
  const { segments, projects } = props;

  return (
    <>
      <Form
        render={() => (
          <FormElement>
            <table>
              <tbody>
                <tr>
                  <td width="550px">
                    <div>
                      <Field
                        id={'segments'}
                        name={'segments'}
                        label={'Segment'}
                        component={FormDropDownList}
                        data={segments}
                        textField="title"
                        dataItemKey="id"
                        //onChange={}
                      />
                    </div>
                    <div>
                      <Field
                        id={'projects'}
                        name={'projects'}
                        label={'Project Name'}
                        component={FormDropDownList}
                        data={projects}
                        textField="title"
                        dataItemKey="id"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </FormElement>
        )}
      ></Form>
    </>
  );
};