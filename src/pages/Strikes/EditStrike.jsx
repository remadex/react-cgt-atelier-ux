/* eslint-disable no-return-await */
import { Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import Loader from '../../components/Loader';
import FormStrike from '../../components/strikes/StrikeForm';
import SubHeader from '../../components/SubHeader';
import apiClient from '../../http-common';

const EditStrike = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [material, setMaterial] = useState({});
  const { isLoading } = useQuery(
    'materials',
    async () => await apiClient.get(`/materials/${id}`),
    {
      onSuccess: (res) => {
        setMaterial(res.data);
        console.log(res.data);
      },
    },
  );

  const { isLoading: isUpdate, mutate: updateMaterial } = useMutation(
    'materials',
    async (materialValues) => await apiClient.put(`/materials/${id}`, materialValues),
    {
      onSuccess: () => {
        navigate('/strikes');
        toast.success('Le matériel a bien été mis à jour');
      },
    },
  );

  const validationSchema = Yup.object({
    name: Yup.string().required('Le nom du matériel est requis'),
    image: Yup.string().required("L'url de l'image est requise"),
    description: Yup.string().required('La description est requise'),
    type: Yup.string().required('Le type est requis'),
  });

  return (
    <>
      {isLoading || (isUpdate && <Loader />)}
      <SubHeader title={`Édition du matériel ${material.name}`} />
      {Object.keys(material).length && (
        <Formik
          initialValues={material}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            updateMaterial(values);
          }}>
          {(props) => <FormStrike formik={props} />}
        </Formik>
      )}
    </>
  );
};

export default EditStrike;
