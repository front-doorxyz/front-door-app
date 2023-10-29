import { ReferrerItem } from '@/db/entities/referrer';
import { useEffect, useState } from 'react';

const useReferrer = (address: `0x${string}` | undefined, pathHack?: string) => {
  const [referrer, setReferrer] = useState<ReferrerItem>();
  const [isValidating, setIsValidating] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(false);

  const checkReferrerRegistration = async (address: `0x${string}`) => {
    const res = await fetch(
      (pathHack ? pathHack : '') + 'api/referrers/' + address
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
      checkReferrerRegistration(address)
        .then((res) => {
          setIsRegistered(true);
          setReferrer(res.item);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        })
        .finally(() => setIsValidating(false));
    }
  }, [address]);

  return { isValidating, isRegistered, error, referrer };
};

export default useReferrer;
