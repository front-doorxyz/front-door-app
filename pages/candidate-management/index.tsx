import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Banner from '../../components/Banner';
import { Layout } from '../../components/layout';
import usePolybase from '@/hooks/usePolybase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

type Candidate = {
  id: string;
  score: number;
  email: string;
  name: string;
  site: string;
};

// const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;
// const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;
// const emailjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;

const sendEmail = (to: string, message: string, subject: string) => {
  try {
    emailjs.send(
      'service_ice9ede', 
      'template_de5afvu', 
      {
      subject: subject,
      from_name: "FrontDoor",
      to_email: to,
      message: message,
      },
      '3o_Hy1tLrPJLDn0GA' 
    ).then((response) => {
      console.log('Email sent successfully', response);
      toast.success('Email sent successfully!', { autoClose: 3000 });
    });
  } catch (error) {
    const errorObject = error as Error;
    console.error('Error sending email:', errorObject);
    toast.error('Error sending email: ' + errorObject.message);
  }
};


const CandidateManagement: NextPage = () => {
  const { readCandidateData } = usePolybase();
  const [candidateArr, setCandidateArr] = useState<Candidate[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCandidate(null);
    setIsModalOpen(false);
  };

  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [isHireDialogOpen, setIsHireDialogOpen] = useState(false);

  const [contactMessage, setContactMessage] = useState('');
  const [rejectReason, setRejectReason] = useState('');
  const [hireMessage, setHireMessage] = useState('');

  const openContactDialog = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsContactDialogOpen(true);

    setContactMessage(`Hi ${candidate.name},

Your profile has been received by the hiring manager 
and you will receive an automatic update when they review your profile, accept or reject your application.

If they accept your application, they will be in touch directly to set up an interview.

Regards.

Front Door.`);
  };

  const openRejectDialog = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsRejectDialogOpen(true);

    setRejectReason(`Hello ${candidate.name},

Kindly note that you have been rejected. Please remain encouraged and endeavor to continue your search.

Regards.

Front Door`);
  };

  const openHireDialog = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsHireDialogOpen(true);

    setHireMessage(`Hello ${candidate.name},

We are pleased to offer you the position. Welcome aboard!

Regards.

Front Door`);
  };

  const closeContactDialog = () => {
    setIsContactDialogOpen(false);
    setContactMessage('');
  };

  const closeRejectDialog = () => {
    setIsRejectDialogOpen(false);
    setRejectReason('');
  };

  const closeHireDialog = () => {
    setIsHireDialogOpen(false);
    setHireMessage('');
  };

  const handleContact = () => {
    if (!selectedCandidate) {
      return;
    }

    const subject = "Update";
    sendEmail(selectedCandidate.email, contactMessage, subject);
    setIsContactDialogOpen(false);
  };

  const handleReject = () => {
    if (!selectedCandidate) {
      return;
    }

    const subject = "Reject Mail";
    sendEmail(selectedCandidate.email, rejectReason, subject);
    setIsRejectDialogOpen(false);
  };

  const handleHire = () => {
    if (!selectedCandidate) {
      return;
    }

    const subject = "Update";
    sendEmail(selectedCandidate.email, hireMessage, subject);
    setIsHireDialogOpen(false);
  };

  useEffect(() => {
    readCandidateData()
      .then((candidateList: Candidate[]) => setCandidateArr(candidateList))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout title='Candidate Management'>
      <Banner title='Candidate Management' />
      <div className='mt-[2%] flex flex-col items-center justify-center pl-3 pr-3'>
        <table className='w-full border-collapse border border-blue-500'>
          <thead>
            <tr className='bg-blue-500 text-white'>
              <th className='border border-blue-500 p-2'>
                Candidate Wallet Address
              </th>
              <th className='border border-blue-500 p-2'>
                Referrer Feedback Score
              </th>
              <th className='border border-blue-500 p-2'>
                Attached Profile Link
              </th>
              <th className='border border-blue-500 p-2'>Contact Candidate</th>
              <th className='border border-blue-500 p-2'>Reject Candidate</th>
              <th className='border border-blue-500 p-2'>Hire Candidate</th>
            </tr>
          </thead>
          <tbody>
            {candidateArr.map((candidate, index) => (
              <tr
                key={candidate.id}
                className={index % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}
              >
                <td className='border border-blue-500 p-2'>{candidate.id}</td>
                <td className='border border-blue-500 p-2'>
                  {candidate.score}
                </td>
                <td className='border border-blue-500 p-2'>
                  <button
                    className='rounded bg-blue-500 px-2 py-1 text-white'
                    onClick={() => openModal(candidate)}
                  >
                    View Profile
                  </button>
                </td>
                <td className='border border-blue-500 p-2'>
                  <button
                    className='rounded bg-blue-500 px-2 py-1 text-white'
                    onClick={() => openContactDialog(candidate)}
                  >
                    Contact
                  </button>
                </td>
                <td className='border border-blue-500 p-2'>
                  <button
                    className='rounded bg-blue-500 px-2 py-1 text-white'
                    onClick={() => openRejectDialog(candidate)}
                  >
                    Reject
                  </button>
                </td>
                <td className='border border-blue-500 p-2'>
                  <button
                    className='rounded bg-blue-500 px-2 py-1 text-white'
                    onClick={() => openHireDialog(candidate)}
                  >
                    Hire
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedCandidate && (
        <div
          className={`${
            isModalOpen ? 'block' : 'hidden'
          } fixed inset-0 z-50 flex items-center justify-center`}
        >
          <div className='text-black-300 fixed w-1/2 rounded-lg bg-white p-4 shadow-lg'>
            <div className='modal-content'>
              <h2 className='mb-2 text-2xl font-bold'>Candidate Profile</h2>
              <p>
                <span className='font-bold'>Name:</span>{' '}
                {selectedCandidate.name}
              </p>
              <p>
                <span className='font-bold'>Email:</span>{' '}
                {selectedCandidate.email}
              </p>
              <p>
                <span className='font-bold'>Address:</span>{' '}
                {selectedCandidate.id}
              </p>
              <p>
                <span className='font-bold'>Website:</span>{' '}
                {selectedCandidate.site}
              </p>
            </div>
            <button
              className='bg-blue-500 px-2 py-1 text-white'
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isContactDialogOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='fixed w-1/2 rounded-lg bg-white p-4 shadow-lg'>
            <h2 className='mb-4 text-2xl font-bold'>Contact Candidate</h2>
            <textarea
              className='h-32 w-full rounded-md border border-gray-400 p-2 focus:outline-none'
              placeholder='Enter reason for rejection...'
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
            ></textarea>
            <div className='mt-2 flex justify-end'>
              <button
                className='rounded-md bg-blue-500 px-4 py-2 text-white'
                onClick={handleContact}
              >
                Contact
              </button>
              <button
                className='ml-2 rounded-md bg-gray-300 px-4 py-2 text-black'
                onClick={closeContactDialog}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isRejectDialogOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='fixed w-1/2 rounded-lg bg-white p-4 shadow-lg'>
            <h2 className='mb-4 text-2xl font-bold'>Reject Candidate</h2>
            <textarea
              className='h-32 w-full rounded-md border border-gray-400 p-2 focus:outline-none'
              placeholder='Enter reason for rejection...'
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            ></textarea>
            <div className='mt-2 flex justify-end'>
              <button
                className='rounded-md bg-blue-500 px-4 py-2 text-white'
                onClick={handleReject}
              >
                Reject
              </button>
              <button
                className='ml-2 rounded-md bg-gray-300 px-4 py-2 text-black'
                onClick={closeRejectDialog}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isHireDialogOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='fixed w-1/2 rounded-lg bg-white p-4 shadow-lg'>
            <h2 className='mb-4 text-2xl font-bold'>Hire Candidate</h2>
            <textarea
              className='h-32 w-full rounded-md border border-gray-400 p-2 focus:outline-none'
              placeholder='Enter message for hiring...'
              value={hireMessage}
              onChange={(e) => setHireMessage(e.target.value)}
            ></textarea>
            <div className='mt-2 flex justify-end'>
              <button
                className='rounded-md bg-blue-500 px-4 py-2 text-white'
                onClick={handleHire}
              >
                Hire
              </button>
              <button
                className='ml-2 rounded-md bg-gray-300 px-4 py-2 text-black'
                onClick={closeHireDialog}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </Layout>
  );
};

export default CandidateManagement;
