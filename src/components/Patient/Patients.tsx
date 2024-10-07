import { useEffect, useState, useCallback } from 'react';
import { patientService } from '../../services/patinet.service';
import { Patient, PatientDataAdded, ToastProps } from './patient.interface';
import {
  StyledSection,
  StyledTitle,
  ButtonContainer,
  HeaderContainer,
  LoadingContainer,
} from './Patients.layout';
import PatientModal from './modal/ModalAddPatient';
import Button from '../shared/Button';
import Toast from '../shared/Toast';
import Spinner from '../shared/Spinner';
import PatientList from './PatientList/PatientList';
import { toastMessages } from '../../utills/constants';

export const Patients: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toastProps, setToastProps] = useState<ToastProps>({
    message: '',
    isSuccess: false,
  });

  useEffect(() => {
    const getPatientData = async () => {
      try {
        setIsLoading(true);
        const patient = await patientService().getPatinentRecords();
        setPatients(patient);
      } catch (error) {
        console.log('Error fetching patients' + error);
      } finally {
        setIsLoading(false);
      }
    };
    getPatientData();
  }, []);

  const handleOpenModal = useCallback((patient?: Patient) => {
    setEditingPatient(patient || null);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPatient(null);
  };

  const handleAddOrEditPatient = useCallback(
    (patientData: PatientDataAdded) => {
      try {
        if (editingPatient) {
          const updatedPatient = { ...editingPatient, ...patientData };
          setPatients(prevPatients =>
            prevPatients.map(p => (p.id === editingPatient.id ? updatedPatient : p))
          );
          setToastProps({ message: toastMessages.successUpdate, isSuccess: true });
        } else {
          const newPatient: Patient = {
            ...patientData,
            id: Date.now().toString(),
            createdAt: new Date(),
          };
          setPatients(prevPatients => [...prevPatients, newPatient]);
          setToastProps({ message: toastMessages.successAdd, isSuccess: true });
        }
        handleCloseModal();
        setShowToast(true);
      } catch {
        setShowToast(true);
        setToastProps({ message: toastMessages.error, isSuccess: false });
      }
    },
    [editingPatient]
  );

  return (
    <StyledSection>
      <HeaderContainer>
        <StyledTitle>Patient List</StyledTitle>
        <ButtonContainer>
          <Button onClick={() => handleOpenModal()} typestyle="advance">
            Add Patient
          </Button>
        </ButtonContainer>
      </HeaderContainer>
      {isLoading ? (
        <LoadingContainer>
          <div>Loading...</div>
          <Spinner />
        </LoadingContainer>
      ) : (
        <PatientList patients={patients} handleOpenModal={handleOpenModal} />
      )}
      <PatientModal
        isOpen={isModalOpen}
        onCloseModal={handleCloseModal}
        onSubmit={handleAddOrEditPatient}
        initialPatient={editingPatient}
      />
      {showToast && <Toast onClose={() => setShowToast(false)} {...toastProps} />}
    </StyledSection>
  );
};
