export const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_acceptedTokenAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_frontDoorAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "BountyNotPaid",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_jobId",
        "type": "uint256"
      }
    ],
    "name": "BountyDisburse",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "companyAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "candidateAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "jobId",
        "type": "uint256"
      }
    ],
    "name": "CandidateHired",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "companyAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "candidateAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "jobId",
        "type": "uint256"
      }
    ],
    "name": "CandidateHiredSuccesfullyAfter90Days",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "senderAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "companyAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "score",
        "type": "uint256"
      }
    ],
    "name": "CompanyScoreSubmitted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "jobId",
        "type": "uint256"
      }
    ],
    "name": "DepositCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "companyAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "jobId",
        "type": "uint256"
      }
    ],
    "name": "JobCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "month1RefundPct",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "month2RefundPct",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "month3RefundPct",
        "type": "uint8"
      }
    ],
    "name": "PercentagesCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "candidateAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "jobId",
        "type": "uint256"
      }
    ],
    "name": "ReferCandidateSuccess",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "candidateAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "referralId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "jobId",
        "type": "uint256"
      }
    ],
    "name": "ReferralConfirmed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "candidateAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "referralId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "jobId",
        "type": "uint256"
      }
    ],
    "name": "ReferralRejected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "senderAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "referrerWallet",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "score",
        "type": "uint256"
      }
    ],
    "name": "ReferralScoreSubmitted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "email",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "refferer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "jobId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "referralId",
        "type": "uint256"
      }
    ],
    "name": "RegisterReferral",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "bountyClaim",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "candidateList",
    "outputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "email",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      },
      {
        "internalType": "uint40",
        "name": "timeOfHiring",
        "type": "uint40"
      },
      {
        "internalType": "uint16",
        "name": "score",
        "type": "uint16"
      },
      {
        "internalType": "bool",
        "name": "isScoreGivenByCompany",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isHired",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "jobConfirmed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidateListForJob",
    "outputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "email",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      },
      {
        "internalType": "uint40",
        "name": "timeOfHiring",
        "type": "uint40"
      },
      {
        "internalType": "uint16",
        "name": "score",
        "type": "uint16"
      },
      {
        "internalType": "bool",
        "name": "isScoreGivenByCompany",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isHired",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "jobConfirmed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_candidateAddress",
        "type": "address"
      }
    ],
    "name": "candidateStatus",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimBounty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "companiesAddressList",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "companyAddressToCandidateScore",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "companyAddressToHiredCandidateAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "companyList",
    "outputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "jobsCreated",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "time_score",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "companyScores",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "score",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "senderAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "companyaccountBalances",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "companyaddressToScore",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_referralCounter",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_jobId",
        "type": "uint256"
      }
    ],
    "name": "confirmReferral",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_jobId",
        "type": "uint256"
      }
    ],
    "name": "disburseBounty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "frontDoorToken",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "companyWallet",
        "type": "address"
      }
    ],
    "name": "getAllJobsOfCompany",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "bounty",
            "type": "uint256"
          },
          {
            "internalType": "uint40",
            "name": "timeAtWhichJobCreated",
            "type": "uint40"
          },
          {
            "internalType": "uint16",
            "name": "numberOfCandidateHired",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "id",
            "type": "uint16"
          },
          {
            "internalType": "bool",
            "name": "issucceed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isDisbursed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isRemoved",
            "type": "bool"
          }
        ],
        "internalType": "struct FrontDoorStructs.Job[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      }
    ],
    "name": "getCandidate",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "email",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "uint40",
            "name": "timeOfHiring",
            "type": "uint40"
          },
          {
            "internalType": "uint16",
            "name": "score",
            "type": "uint16"
          },
          {
            "internalType": "bool",
            "name": "isScoreGivenByCompany",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isHired",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "jobConfirmed",
            "type": "bool"
          }
        ],
        "internalType": "struct FrontDoorStructs.Candidate",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_jobId",
        "type": "uint256"
      }
    ],
    "name": "getCandidateHiredJobId",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "email",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "uint40",
            "name": "timeOfHiring",
            "type": "uint40"
          },
          {
            "internalType": "uint16",
            "name": "score",
            "type": "uint16"
          },
          {
            "internalType": "bool",
            "name": "isScoreGivenByCompany",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isHired",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "jobConfirmed",
            "type": "bool"
          }
        ],
        "internalType": "struct FrontDoorStructs.Candidate",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_jobId",
        "type": "uint256"
      }
    ],
    "name": "getCandidateListForJob",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "email",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "uint40",
            "name": "timeOfHiring",
            "type": "uint40"
          },
          {
            "internalType": "uint16",
            "name": "score",
            "type": "uint16"
          },
          {
            "internalType": "bool",
            "name": "isScoreGivenByCompany",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isHired",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "jobConfirmed",
            "type": "bool"
          }
        ],
        "internalType": "struct FrontDoorStructs.Candidate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "companyAddress",
        "type": "address"
      }
    ],
    "name": "getCompanyScores",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "senderAddress",
            "type": "address"
          }
        ],
        "internalType": "struct FrontDoorStructs.CompanyScore[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMyRefferals",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "referrerWallet",
        "type": "address"
      }
    ],
    "name": "getReferralScores",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "senderAddress",
            "type": "address"
          }
        ],
        "internalType": "struct FrontDoorStructs.ReferralScore[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      }
    ],
    "name": "getReferrer",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "email",
            "type": "bytes32"
          },
          {
            "internalType": "uint16",
            "name": "score",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "numberOfSuccesfullReferrals",
            "type": "uint16"
          }
        ],
        "internalType": "struct FrontDoorStructs.Referrer",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "hasScoredCompany",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_candidateAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_jobId",
        "type": "uint256"
      }
    ],
    "name": "hireCandidate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isCompany",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_company",
        "type": "address"
      }
    ],
    "name": "isCompanyRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "jobCandidatehire",
    "outputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "email",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      },
      {
        "internalType": "uint40",
        "name": "timeOfHiring",
        "type": "uint40"
      },
      {
        "internalType": "uint16",
        "name": "score",
        "type": "uint16"
      },
      {
        "internalType": "bool",
        "name": "isScoreGivenByCompany",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isHired",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "jobConfirmed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "jobList",
    "outputs": [
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "bounty",
        "type": "uint256"
      },
      {
        "internalType": "uint40",
        "name": "timeAtWhichJobCreated",
        "type": "uint40"
      },
      {
        "internalType": "uint16",
        "name": "numberOfCandidateHired",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "id",
        "type": "uint16"
      },
      {
        "internalType": "bool",
        "name": "issucceed",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isDisbursed",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isRemoved",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "referralIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "referralList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "email",
            "type": "bytes32"
          },
          {
            "internalType": "uint16",
            "name": "score",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "numberOfSuccesfullReferrals",
            "type": "uint16"
          }
        ],
        "internalType": "struct FrontDoorStructs.Referrer",
        "name": "referrer",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "email",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "uint40",
            "name": "timeOfHiring",
            "type": "uint40"
          },
          {
            "internalType": "uint16",
            "name": "score",
            "type": "uint16"
          },
          {
            "internalType": "bool",
            "name": "isScoreGivenByCompany",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isHired",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "jobConfirmed",
            "type": "bool"
          }
        ],
        "internalType": "struct FrontDoorStructs.Candidate",
        "name": "candidate",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "bounty",
            "type": "uint256"
          },
          {
            "internalType": "uint40",
            "name": "timeAtWhichJobCreated",
            "type": "uint40"
          },
          {
            "internalType": "uint16",
            "name": "numberOfCandidateHired",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "id",
            "type": "uint16"
          },
          {
            "internalType": "bool",
            "name": "issucceed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isDisbursed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isRemoved",
            "type": "bool"
          }
        ],
        "internalType": "struct FrontDoorStructs.Job",
        "name": "job",
        "type": "tuple"
      },
      {
        "internalType": "uint40",
        "name": "timeAtWhichReferralStarted",
        "type": "uint40"
      },
      {
        "internalType": "uint40",
        "name": "referralEnd",
        "type": "uint40"
      },
      {
        "internalType": "uint16",
        "name": "id",
        "type": "uint16"
      },
      {
        "internalType": "bool",
        "name": "isConfirmed",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "confirmed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "referralScores",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "score",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "senderAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "referrerList",
    "outputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "email",
        "type": "bytes32"
      },
      {
        "internalType": "uint16",
        "name": "score",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "numberOfSuccesfullReferrals",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "registerCompany",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "bounty",
        "type": "uint256"
      }
    ],
    "name": "registerJob",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "jobId",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "refereeMail",
        "type": "bytes32"
      }
    ],
    "name": "registerReferral",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "email",
        "type": "bytes32"
      }
    ],
    "name": "registerReferrer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const