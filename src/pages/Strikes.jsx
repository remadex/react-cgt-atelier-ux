/* eslint-disable no-return-await */
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import Loader from '../components/Loader';
import ListStrikes from '../components/strikes/ListStrikes';
import SubHeader from '../components/SubHeader';
import apiClient from '../http-common';

const Strikes = () => {
  const [materials, setMaterials] = useState([]);
  const [id, setId] = useState();

  const { isLoading, refetch: getAllMaterial } = useQuery(
    'materials',
    async () => await apiClient.get('/materials'),
    {
      onSuccess: (res) => {
        setMaterials(res.data);
      },
    },
  );

  const { isLoading: isDeleting, mutate } = useMutation(
    'materials',
    async () => await apiClient.delete(`/materials/${id}`),
    {
      onSuccess: () => {
        toast.success('Le matériel a bien été supprimé');
        getAllMaterial();
      },
    },
  );

  const deleteMaterial = async (idMaterial) => {
    await setId(idMaterial);
    mutate();
  };

  return (
    <>
      {isLoading || (isDeleting && <Loader />)}
      <SubHeader title="Liste du matériel de grève" />
      <ListStrikes materials={materials} deleteMaterial={deleteMaterial} />
    </>
  );
};

export default Strikes;
