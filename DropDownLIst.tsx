import React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Label } from '@progress/kendo-react-labels';
import { DropDownList } from '@progress/kendo-react-dropdowns';

interface TitleId {
  title: string;
  id: string;
}

export interface DropDownListProps {
  label: string,
  id: string,
  valid: boolean,
  data: TitleId[],
  onSegmentChange: () => {};
};

export const FormDropDownList = ({
  label,
  id,
  valid,
  data,
  onSegmentChange,
  ...others
}: DropDownListProps) => {

  const editorRef = React.useRef(null);
  const labelId = label ? `${id}_label` : '';

  console.log(data)

  return (
    <FieldWrapper>
      <Label
        id={labelId}
        editorRef={editorRef}
        editorId={id}
        editorValid={valid}
      >
        {label}
      </Label>
      <DropDownList
        ariaLabelledBy={labelId}
        ref={editorRef}
        valid={valid}
        id={id}
        data={data}
        onChange={onSegmentChange}
        {...others}
        textField="title"
        dataItemKey="id"
      />
    </FieldWrapper>
  );
};
