import React from 'react';
import Modal from 'react-modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Patient, PatientDataAdded } from '../patient.interface';
import Input from '../../shared/Input';
import { StyledModal, StyledForm, Title, ButtonContainer } from './ModalAddPatient.layout';
import Button from '../../shared/Button';
import TextArea from '../../shared/TextArea';
import DropZone from '../../shared/DropZone';

Modal.setAppElement('#root');

interface PatientModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  onSubmit: (data: PatientDataAdded) => void;
  initialPatient: Patient | null;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(30, 'Name cannot exceed 30 characters'),
  avatar: Yup.string().required('Avatar is required'),
  description: Yup.string()
    .required('Description is required')
    .max(800, 'Description cannot exceed 800 characters'),
  website: Yup.string()
    .url('Must be a valid URL')
    .required('Website is required')
    .max(150, 'Website cannot exceed 150 characters'),
});

const PatientModal: React.FC<PatientModalProps> = ({
  isOpen,
  onCloseModal,
  onSubmit,
  initialPatient,
}) => {
  const initialValues: Partial<Patient> = initialPatient || {
    name: '',
    avatar: '',
    description: '',
    website: '',
  };

  return (
    <StyledModal isOpen={isOpen} onRequestClose={onCloseModal} contentLabel="Patient Form">
      <Title>{initialPatient ? 'Edit Patient' : 'Add Patient'}</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values as PatientDataAdded);
          setSubmitting(false);
          onCloseModal();
        }}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Input name="name" label="Name" type="text" />
            <DropZone name="avatar" label="Avatar" />
            <TextArea name="description" label="Description" type="textarea" />
            <Input name="website" label="Website" type="text" />
            <ButtonContainer>
              <Button type="button" disabled={isSubmitting} onClick={onCloseModal}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} typestyle="advance">
                Send
              </Button>
            </ButtonContainer>
          </StyledForm>
        )}
      </Formik>
    </StyledModal>
  );
};

export default PatientModal;
