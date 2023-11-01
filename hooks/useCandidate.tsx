import { CandidateItem } from '@/db/entities/candidate';
import { useEffect, useState } from 'react';

const useCandidate = (
  address: `0x${string}` | undefined,
  pathHack?: string
) => {
  const [canditate, setCanditate] = useState<CandidateItem>();
  const [isValidating, setIsValidating] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(false);

  const checkCandidateRegistration = async (address: `0x${string}`) => {
    const res = await fetch(
      (pathHack ? pathHack : '') + 'api/candidates/' + address
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
      checkCandidateRegistration(address)
        .then((res) => {
          setIsRegistered(true);
          setCanditate(res.item);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        })
        .finally(() => setIsValidating(false));
    }
  }, [address]);

  return { isValidating, isRegistered, error, canditate };
};

export default useCandidate;
