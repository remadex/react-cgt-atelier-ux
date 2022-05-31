/* eslint-disable no-return-await */
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Loader from '../components/Loader';
import FormStrike from '../components/strikes/StrikeForm';
import SubHeader from '../components/SubHeader';
import apiClient from '../http-common';

const AddStrike = () => {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    '/materials',
    async (values) => await apiClient.post(`/materials`, values),
    {
      onSuccess: () => {
        navigate('/strikes');
        toast.success('Le matériel de grève a été ajouté');
      },
    },
  );
  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      type: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Le nom du matériel est requis'),
      image: Yup.string().required("L'url de l'image est requise"),
      description: Yup.string().required('La description est requise'),
      type: Yup.string().required('Le type est requis'),
    }),
    onSubmit: (values) => {
      console.log(values);
      mutate(values);
    },
  });

  return (
    <>
      {isLoading && <Loader />}
      <SubHeader title="Ajouter un matériel" />
      <FormStrike formik={formik} />
    </>
  );
};

export default AddStrike;
