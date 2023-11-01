import { CompanyItem } from '@/db/entities/company';
import { useEffect, useState } from 'react';

const useCompany = (address: `0x${string}` | undefined, pathHack?: string) => {
  const [company, setCompany] = useState<CompanyItem>();
  const [isValidating, setIsValidating] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(false);

  const checkCompanyRegistration = async (address: `0x${string}`) => {
    const res = await fetch(
      (pathHack ? pathHack : '')  + 'api/companies/' + address
    );
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('bad response');
    }
  };

  useEffect(() => {
    setIsValidating(true);
    setIsRegistered(false);

    if (address) {
      checkCompanyRegistration(address)
        .then((res) => {
          setIsRegistered(true);
          setCompany(res.item);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        })
        .finally(() => setIsValidating(false));
    }
  }, [address]);

  return { isValidating, isRegistered, error, company };
};

export default useCompany;
