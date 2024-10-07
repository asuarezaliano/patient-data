import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useField, useFormikContext } from 'formik';
import Button from './Button';

const DropZoneContainer = styled.div<{ isDragActive: boolean }>`
  border: 2px dashed ${props => (props.isDragActive ? '#007bff' : '#cccccc')};
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border-color: #999999;
  }
`;

const DropZoneText = styled.p`
  margin: 0 0 10px;
  font-size: 16px;
  color: #666666;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100px;
  margin-top: 10px;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
  min-height: 18px;
  margin-top: 2px;
  margin-bottom: 4px;
`;

interface DropZoneProps {
  name: string;
  label: string;
}

const DropZone: React.FC<DropZoneProps> = ({ name, label }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const [isDragActive, setIsDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(field.value || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleFiles = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFieldValue(name, reader.result as string);
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    setFieldValue(name, '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <DropZoneContainer
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={openFileDialog}
        isDragActive={isDragActive}
      >
        <input
          ref={fileInputRef}
          id={name}
          name={name}
          type="file"
          style={{ display: 'none' }}
          onChange={handleChange}
          accept="image/*"
        />
        {previewUrl ? (
          <>
            <ImagePreview src={previewUrl} alt="Preview" />
            <Button
              type="button"
              typeStyle="delete"
              onClick={e => {
                e.stopPropagation();
                handleRemove();
              }}
            >
              Delete Image
            </Button>
          </>
        ) : (
          <>
            <DropZoneText>Drag and drop an image here, or</DropZoneText>
            <Button
              type="button"
              typeStyle="advance"
              onClick={e => {
                e.stopPropagation();
                openFileDialog();
              }}
            >
              Select File
            </Button>
          </>
        )}
      </DropZoneContainer>
      <ErrorMessage>{meta.touched && meta.error ? meta.error : ''}</ErrorMessage>
    </div>
  );
};

export default DropZone;
