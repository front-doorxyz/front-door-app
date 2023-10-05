import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FNDR_Faucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fndrFaucetABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_ERC20Address', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokensTransfered',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'FNDRAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'requestTokens',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

export const fndrFaucetAddress =
  '0x903De7b6AB3cA31C9C3b277877fC4c405FCBEdc8' as const

export const fndrFaucetConfig = {
  address: fndrFaucetAddress,
  abi: fndrFaucetABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FrontDoorToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const frontDoorTokenABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'faucet',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_faucet', internalType: 'address', type: 'address' }],
    name: 'setFaucet',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

export const frontDoorTokenAddress =
  '0x53736EdEa0B813f0E95f10bac6B91876ed8114db' as const

export const frontDoorTokenConfig = {
  address: frontDoorTokenAddress,
  abi: frontDoorTokenABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Recruitment
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const recruitmentABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: '_acceptedTokenAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: '_frontDoorAddress', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'BountyNotPaid' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BountyDisburse',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'companyAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'candidateAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CandidateHired',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'companyAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'candidateAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CandidateHiredSuccesfullyAfter90Days',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'senderAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'companyAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'score',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CompanyScoreSubmitted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DepositCompleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'companyAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'JobCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'month1RefundPct',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'month2RefundPct',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'month3RefundPct',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'PercentagesCompleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'candidateAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ReferCandidateSuccess',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'candidateAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'referralId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ReferralConfirmed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'candidateAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'referralId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ReferralRejected',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'senderAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'referrerWallet',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'score',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReferralScoreSubmitted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'email',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'refferer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'jobId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'referralId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RegisterReferral',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'bountyClaim',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'candidateList',
    outputs: [
      { name: 'wallet', internalType: 'address', type: 'address' },
      { name: 'email', internalType: 'bytes32', type: 'bytes32' },
      { name: 'referrer', internalType: 'address', type: 'address' },
      { name: 'timeOfHiring', internalType: 'uint40', type: 'uint40' },
      { name: 'score', internalType: 'uint16', type: 'uint16' },
      { name: 'isScoreGivenByCompany', internalType: 'bool', type: 'bool' },
      { name: 'isHired', internalType: 'bool', type: 'bool' },
      { name: 'jobConfirmed', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'candidateListForJob',
    outputs: [
      { name: 'wallet', internalType: 'address', type: 'address' },
      { name: 'email', internalType: 'bytes32', type: 'bytes32' },
      { name: 'referrer', internalType: 'address', type: 'address' },
      { name: 'timeOfHiring', internalType: 'uint40', type: 'uint40' },
      { name: 'score', internalType: 'uint16', type: 'uint16' },
      { name: 'isScoreGivenByCompany', internalType: 'bool', type: 'bool' },
      { name: 'isHired', internalType: 'bool', type: 'bool' },
      { name: 'jobConfirmed', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_candidateAddress', internalType: 'address', type: 'address' },
    ],
    name: 'candidateStatus',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'claimBounty',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'companiesAddressList',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'companyAddressToCandidateScore',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'companyAddressToHiredCandidateAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'companyList',
    outputs: [
      { name: 'wallet', internalType: 'address', type: 'address' },
      { name: 'jobsCreated', internalType: 'uint256', type: 'uint256' },
      { name: 'time_score', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'companyScores',
    outputs: [
      { name: 'score', internalType: 'uint256', type: 'uint256' },
      { name: 'senderAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'companyaccountBalances',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'companyaddressToScore',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_referralCounter', internalType: 'uint256', type: 'uint256' },
      { name: '_jobId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'confirmReferral',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_jobId', internalType: 'uint256', type: 'uint256' }],
    name: 'disburseBounty',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'frontDoorToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'companyWallet', internalType: 'address', type: 'address' },
    ],
    name: 'getAllJobsOfCompany',
    outputs: [
      {
        name: '',
        internalType: 'struct FrontDoorStructs.Job[]',
        type: 'tuple[]',
        components: [
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'bounty', internalType: 'uint256', type: 'uint256' },
          {
            name: 'timeAtWhichJobCreated',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'numberOfCandidateHired',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'id', internalType: 'uint16', type: 'uint16' },
          { name: 'issucceed', internalType: 'bool', type: 'bool' },
          { name: 'isDisbursed', internalType: 'bool', type: 'bool' },
          { name: 'isRemoved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'wallet', internalType: 'address', type: 'address' }],
    name: 'getCandidate',
    outputs: [
      {
        name: '',
        internalType: 'struct FrontDoorStructs.Candidate',
        type: 'tuple',
        components: [
          { name: 'wallet', internalType: 'address', type: 'address' },
          { name: 'email', internalType: 'bytes32', type: 'bytes32' },
          { name: 'referrer', internalType: 'address', type: 'address' },
          { name: 'timeOfHiring', internalType: 'uint40', type: 'uint40' },
          { name: 'score', internalType: 'uint16', type: 'uint16' },
          { name: 'isScoreGivenByCompany', internalType: 'bool', type: 'bool' },
          { name: 'isHired', internalType: 'bool', type: 'bool' },
          { name: 'jobConfirmed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_jobId', internalType: 'uint256', type: 'uint256' }],
    name: 'getCandidateHiredJobId',
    outputs: [
      {
        name: '',
        internalType: 'struct FrontDoorStructs.Candidate',
        type: 'tuple',
        components: [
          { name: 'wallet', internalType: 'address', type: 'address' },
          { name: 'email', internalType: 'bytes32', type: 'bytes32' },
          { name: 'referrer', internalType: 'address', type: 'address' },
          { name: 'timeOfHiring', internalType: 'uint40', type: 'uint40' },
          { name: 'score', internalType: 'uint16', type: 'uint16' },
          { name: 'isScoreGivenByCompany', internalType: 'bool', type: 'bool' },
          { name: 'isHired', internalType: 'bool', type: 'bool' },
          { name: 'jobConfirmed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_jobId', internalType: 'uint256', type: 'uint256' }],
    name: 'getCandidateListForJob',
    outputs: [
      {
        name: '',
        internalType: 'struct FrontDoorStructs.Candidate[]',
        type: 'tuple[]',
        components: [
          { name: 'wallet', internalType: 'address', type: 'address' },
          { name: 'email', internalType: 'bytes32', type: 'bytes32' },
          { name: 'referrer', internalType: 'address', type: 'address' },
          { name: 'timeOfHiring', internalType: 'uint40', type: 'uint40' },
          { name: 'score', internalType: 'uint16', type: 'uint16' },
          { name: 'isScoreGivenByCompany', internalType: 'bool', type: 'bool' },
          { name: 'isHired', internalType: 'bool', type: 'bool' },
          { name: 'jobConfirmed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'companyAddress', internalType: 'address', type: 'address' },
    ],
    name: 'getCompanyScores',
    outputs: [
      {
        name: '',
        internalType: 'struct FrontDoorStructs.CompanyScore[]',
        type: 'tuple[]',
        components: [
          { name: 'score', internalType: 'uint256', type: 'uint256' },
          { name: 'senderAddress', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getMyRefferals',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'referrerWallet', internalType: 'address', type: 'address' },
    ],
    name: 'getReferralScores',
    outputs: [
      {
        name: '',
        internalType: 'struct FrontDoorStructs.ReferralScore[]',
        type: 'tuple[]',
        components: [
          { name: 'score', internalType: 'uint256', type: 'uint256' },
          { name: 'senderAddress', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'wallet', internalType: 'address', type: 'address' }],
    name: 'getReferrer',
    outputs: [
      {
        name: '',
        internalType: 'struct FrontDoorStructs.Referrer',
        type: 'tuple',
        components: [
          { name: 'wallet', internalType: 'address', type: 'address' },
          { name: 'email', internalType: 'bytes32', type: 'bytes32' },
          { name: 'score', internalType: 'uint16', type: 'uint16' },
          {
            name: 'numberOfSuccesfullReferrals',
            internalType: 'uint16',
            type: 'uint16',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'hasScoredCompany',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_candidateAddress', internalType: 'address', type: 'address' },
      { name: '_jobId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hireCandidate',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'isCompany',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_company', internalType: 'address', type: 'address' }],
    name: 'isCompanyRegistered',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'jobCandidatehire',
    outputs: [
      { name: 'wallet', internalType: 'address', type: 'address' },
      { name: 'email', internalType: 'bytes32', type: 'bytes32' },
      { name: 'referrer', internalType: 'address', type: 'address' },
      { name: 'timeOfHiring', internalType: 'uint40', type: 'uint40' },
      { name: 'score', internalType: 'uint16', type: 'uint16' },
      { name: 'isScoreGivenByCompany', internalType: 'bool', type: 'bool' },
      { name: 'isHired', internalType: 'bool', type: 'bool' },
      { name: 'jobConfirmed', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'jobList',
    outputs: [
      { name: 'creator', internalType: 'address', type: 'address' },
      { name: 'bounty', internalType: 'uint256', type: 'uint256' },
      { name: 'timeAtWhichJobCreated', internalType: 'uint40', type: 'uint40' },
      {
        name: 'numberOfCandidateHired',
        internalType: 'uint16',
        type: 'uint16',
      },
      { name: 'id', internalType: 'uint16', type: 'uint16' },
      { name: 'issucceed', internalType: 'bool', type: 'bool' },
      { name: 'isDisbursed', internalType: 'bool', type: 'bool' },
      { name: 'isRemoved', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'referralIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'referralList',
    outputs: [
      {
        name: 'referrer',
        internalType: 'struct FrontDoorStructs.Referrer',
        type: 'tuple',
        components: [
          { name: 'wallet', internalType: 'address', type: 'address' },
          { name: 'email', internalType: 'bytes32', type: 'bytes32' },
          { name: 'score', internalType: 'uint16', type: 'uint16' },
          {
            name: 'numberOfSuccesfullReferrals',
            internalType: 'uint16',
            type: 'uint16',
          },
        ],
      },
      {
        name: 'candidate',
        internalType: 'struct FrontDoorStructs.Candidate',
        type: 'tuple',
        components: [
          { name: 'wallet', internalType: 'address', type: 'address' },
          { name: 'email', internalType: 'bytes32', type: 'bytes32' },
          { name: 'referrer', internalType: 'address', type: 'address' },
          { name: 'timeOfHiring', internalType: 'uint40', type: 'uint40' },
          { name: 'score', internalType: 'uint16', type: 'uint16' },
          { name: 'isScoreGivenByCompany', internalType: 'bool', type: 'bool' },
          { name: 'isHired', internalType: 'bool', type: 'bool' },
          { name: 'jobConfirmed', internalType: 'bool', type: 'bool' },
        ],
      },
      {
        name: 'job',
        internalType: 'struct FrontDoorStructs.Job',
        type: 'tuple',
        components: [
          { name: 'creator', internalType: 'address', type: 'address' },
          { name: 'bounty', internalType: 'uint256', type: 'uint256' },
          {
            name: 'timeAtWhichJobCreated',
            internalType: 'uint40',
            type: 'uint40',
          },
          {
            name: 'numberOfCandidateHired',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'id', internalType: 'uint16', type: 'uint16' },
          { name: 'issucceed', internalType: 'bool', type: 'bool' },
          { name: 'isDisbursed', internalType: 'bool', type: 'bool' },
          { name: 'isRemoved', internalType: 'bool', type: 'bool' },
        ],
      },
      {
        name: 'timeAtWhichReferralStarted',
        internalType: 'uint40',
        type: 'uint40',
      },
      { name: 'referralEnd', internalType: 'uint40', type: 'uint40' },
      { name: 'id', internalType: 'uint16', type: 'uint16' },
      { name: 'isConfirmed', internalType: 'bool', type: 'bool' },
      { name: 'confirmed', internalType: 'bool', type: 'bool' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'referralScores',
    outputs: [
      { name: 'score', internalType: 'uint256', type: 'uint256' },
      { name: 'senderAddress', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'referrerList',
    outputs: [
      { name: 'wallet', internalType: 'address', type: 'address' },
      { name: 'email', internalType: 'bytes32', type: 'bytes32' },
      { name: 'score', internalType: 'uint16', type: 'uint16' },
      {
        name: 'numberOfSuccesfullReferrals',
        internalType: 'uint16',
        type: 'uint16',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'registerCompany',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'bounty', internalType: 'uint256', type: 'uint256' }],
    name: 'registerJob',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'jobId', internalType: 'uint256', type: 'uint256' },
      { name: 'refereeMail', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'registerReferral',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'email', internalType: 'bytes32', type: 'bytes32' }],
    name: 'registerReferrer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

export const recruitmentAddress =
  '0x8D31fD00A5D3D27FE421999f79bBD0F3aD84170b' as const

export const recruitmentConfig = {
  address: recruitmentAddress,
  abi: recruitmentABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link fndrFaucetABI}__.
 */
export function useFndrFaucetRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof fndrFaucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof fndrFaucetABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractRead({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    ...config,
  } as UseContractReadConfig<typeof fndrFaucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link fndrFaucetABI}__ and `functionName` set to `"FNDRAddress"`.
 */
export function useFndrFaucetFndrAddress<
  TFunctionName extends 'FNDRAddress',
  TSelectData = ReadContractResult<typeof fndrFaucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof fndrFaucetABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    functionName: 'FNDRAddress',
    ...config,
  } as UseContractReadConfig<typeof fndrFaucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link fndrFaucetABI}__ and `functionName` set to `"owner"`.
 */
export function useFndrFaucetOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof fndrFaucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof fndrFaucetABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof fndrFaucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link fndrFaucetABI}__.
 */
export function useFndrFaucetWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof fndrFaucetABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof fndrFaucetABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof fndrFaucetABI, TFunctionName, TMode>({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link fndrFaucetABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useFndrFaucetRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof fndrFaucetABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof fndrFaucetABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof fndrFaucetABI, 'renounceOwnership', TMode>({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link fndrFaucetABI}__ and `functionName` set to `"requestTokens"`.
 */
export function useFndrFaucetRequestTokens<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof fndrFaucetABI,
          'requestTokens'
        >['request']['abi'],
        'requestTokens',
        TMode
      > & { functionName?: 'requestTokens' }
    : UseContractWriteConfig<typeof fndrFaucetABI, 'requestTokens', TMode> & {
        abi?: never
        functionName?: 'requestTokens'
      } = {} as any,
) {
  return useContractWrite<typeof fndrFaucetABI, 'requestTokens', TMode>({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    functionName: 'requestTokens',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link fndrFaucetABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useFndrFaucetTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof fndrFaucetABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof fndrFaucetABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof fndrFaucetABI, 'transferOwnership', TMode>({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link fndrFaucetABI}__.
 */
export function usePrepareFndrFaucetWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof fndrFaucetABI, TFunctionName>,
    'abi' | 'address'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    ...config,
  } as UsePrepareContractWriteConfig<typeof fndrFaucetABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link fndrFaucetABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareFndrFaucetRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof fndrFaucetABI, 'renounceOwnership'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof fndrFaucetABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link fndrFaucetABI}__ and `functionName` set to `"requestTokens"`.
 */
export function usePrepareFndrFaucetRequestTokens(
  config: Omit<
    UsePrepareContractWriteConfig<typeof fndrFaucetABI, 'requestTokens'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    functionName: 'requestTokens',
    ...config,
  } as UsePrepareContractWriteConfig<typeof fndrFaucetABI, 'requestTokens'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link fndrFaucetABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareFndrFaucetTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof fndrFaucetABI, 'transferOwnership'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof fndrFaucetABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link fndrFaucetABI}__.
 */
export function useFndrFaucetEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof fndrFaucetABI, TEventName>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractEvent({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    ...config,
  } as UseContractEventConfig<typeof fndrFaucetABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link fndrFaucetABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useFndrFaucetOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof fndrFaucetABI, 'OwnershipTransferred'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof fndrFaucetABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link fndrFaucetABI}__ and `eventName` set to `"TokensTransfered"`.
 */
export function useFndrFaucetTokensTransferedEvent(
  config: Omit<
    UseContractEventConfig<typeof fndrFaucetABI, 'TokensTransfered'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    eventName: 'TokensTransfered',
    ...config,
  } as UseContractEventConfig<typeof fndrFaucetABI, 'TokensTransfered'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__.
 */
export function useFrontDoorTokenRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`.
 */
export function useFrontDoorTokenDefaultAdminRole<
  TFunctionName extends 'DEFAULT_ADMIN_ROLE',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"MINTER_ROLE"`.
 */
export function useFrontDoorTokenMinterRole<
  TFunctionName extends 'MINTER_ROLE',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'MINTER_ROLE',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"allowance"`.
 */
export function useFrontDoorTokenAllowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useFrontDoorTokenBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"decimals"`.
 */
export function useFrontDoorTokenDecimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"faucet"`.
 */
export function useFrontDoorTokenFaucet<
  TFunctionName extends 'faucet',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'faucet',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"getRoleAdmin"`.
 */
export function useFrontDoorTokenGetRoleAdmin<
  TFunctionName extends 'getRoleAdmin',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'getRoleAdmin',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"hasRole"`.
 */
export function useFrontDoorTokenHasRole<
  TFunctionName extends 'hasRole',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'hasRole',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"name"`.
 */
export function useFrontDoorTokenName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useFrontDoorTokenSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"symbol"`.
 */
export function useFrontDoorTokenSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useFrontDoorTokenTotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof frontDoorTokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof frontDoorTokenABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<
    typeof frontDoorTokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__.
 */
export function useFrontDoorTokenWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof frontDoorTokenABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, TFunctionName, TMode>({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"approve"`.
 */
export function useFrontDoorTokenApprove<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof frontDoorTokenABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'approve', TMode>({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function useFrontDoorTokenDecreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'decreaseAllowance'
        >['request']['abi'],
        'decreaseAllowance',
        TMode
      > & { functionName?: 'decreaseAllowance' }
    : UseContractWriteConfig<
        typeof frontDoorTokenABI,
        'decreaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'decreaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'decreaseAllowance', TMode>(
    {
      abi: frontDoorTokenABI,
      address: frontDoorTokenAddress,
      functionName: 'decreaseAllowance',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"grantRole"`.
 */
export function useFrontDoorTokenGrantRole<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'grantRole'
        >['request']['abi'],
        'grantRole',
        TMode
      > & { functionName?: 'grantRole' }
    : UseContractWriteConfig<typeof frontDoorTokenABI, 'grantRole', TMode> & {
        abi?: never
        functionName?: 'grantRole'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'grantRole', TMode>({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'grantRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function useFrontDoorTokenIncreaseAllowance<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'increaseAllowance'
        >['request']['abi'],
        'increaseAllowance',
        TMode
      > & { functionName?: 'increaseAllowance' }
    : UseContractWriteConfig<
        typeof frontDoorTokenABI,
        'increaseAllowance',
        TMode
      > & {
        abi?: never
        functionName?: 'increaseAllowance'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'increaseAllowance', TMode>(
    {
      abi: frontDoorTokenABI,
      address: frontDoorTokenAddress,
      functionName: 'increaseAllowance',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"mint"`.
 */
export function useFrontDoorTokenMint<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'mint'
        >['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<typeof frontDoorTokenABI, 'mint', TMode> & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'mint', TMode>({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"renounceRole"`.
 */
export function useFrontDoorTokenRenounceRole<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'renounceRole'
        >['request']['abi'],
        'renounceRole',
        TMode
      > & { functionName?: 'renounceRole' }
    : UseContractWriteConfig<
        typeof frontDoorTokenABI,
        'renounceRole',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceRole'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'renounceRole', TMode>({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'renounceRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"revokeRole"`.
 */
export function useFrontDoorTokenRevokeRole<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'revokeRole'
        >['request']['abi'],
        'revokeRole',
        TMode
      > & { functionName?: 'revokeRole' }
    : UseContractWriteConfig<typeof frontDoorTokenABI, 'revokeRole', TMode> & {
        abi?: never
        functionName?: 'revokeRole'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'revokeRole', TMode>({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'revokeRole',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"setFaucet"`.
 */
export function useFrontDoorTokenSetFaucet<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'setFaucet'
        >['request']['abi'],
        'setFaucet',
        TMode
      > & { functionName?: 'setFaucet' }
    : UseContractWriteConfig<typeof frontDoorTokenABI, 'setFaucet', TMode> & {
        abi?: never
        functionName?: 'setFaucet'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'setFaucet', TMode>({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'setFaucet',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"transfer"`.
 */
export function useFrontDoorTokenTransfer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof frontDoorTokenABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'transfer', TMode>({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useFrontDoorTokenTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof frontDoorTokenABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof frontDoorTokenABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof frontDoorTokenABI, 'transferFrom', TMode>({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__.
 */
export function usePrepareFrontDoorTokenWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof frontDoorTokenABI, TFunctionName>,
    'abi' | 'address'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    ...config,
  } as UsePrepareContractWriteConfig<typeof frontDoorTokenABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareFrontDoorTokenApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'approve'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export function usePrepareFrontDoorTokenDecreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof frontDoorTokenABI,
      'decreaseAllowance'
    >,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'decreaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof frontDoorTokenABI,
    'decreaseAllowance'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"grantRole"`.
 */
export function usePrepareFrontDoorTokenGrantRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'grantRole'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'grantRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'grantRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export function usePrepareFrontDoorTokenIncreaseAllowance(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof frontDoorTokenABI,
      'increaseAllowance'
    >,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'increaseAllowance',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof frontDoorTokenABI,
    'increaseAllowance'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareFrontDoorTokenMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'mint'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"renounceRole"`.
 */
export function usePrepareFrontDoorTokenRenounceRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'renounceRole'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'renounceRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'renounceRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"revokeRole"`.
 */
export function usePrepareFrontDoorTokenRevokeRole(
  config: Omit<
    UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'revokeRole'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'revokeRole',
    ...config,
  } as UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'revokeRole'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"setFaucet"`.
 */
export function usePrepareFrontDoorTokenSetFaucet(
  config: Omit<
    UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'setFaucet'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'setFaucet',
    ...config,
  } as UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'setFaucet'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareFrontDoorTokenTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'transfer'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link frontDoorTokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareFrontDoorTokenTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'transferFrom'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof frontDoorTokenABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link frontDoorTokenABI}__.
 */
export function useFrontDoorTokenEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof frontDoorTokenABI, TEventName>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractEvent({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    ...config,
  } as UseContractEventConfig<typeof frontDoorTokenABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link frontDoorTokenABI}__ and `eventName` set to `"Approval"`.
 */
export function useFrontDoorTokenApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof frontDoorTokenABI, 'Approval'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof frontDoorTokenABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link frontDoorTokenABI}__ and `eventName` set to `"RoleAdminChanged"`.
 */
export function useFrontDoorTokenRoleAdminChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof frontDoorTokenABI, 'RoleAdminChanged'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    eventName: 'RoleAdminChanged',
    ...config,
  } as UseContractEventConfig<typeof frontDoorTokenABI, 'RoleAdminChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link frontDoorTokenABI}__ and `eventName` set to `"RoleGranted"`.
 */
export function useFrontDoorTokenRoleGrantedEvent(
  config: Omit<
    UseContractEventConfig<typeof frontDoorTokenABI, 'RoleGranted'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    eventName: 'RoleGranted',
    ...config,
  } as UseContractEventConfig<typeof frontDoorTokenABI, 'RoleGranted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link frontDoorTokenABI}__ and `eventName` set to `"RoleRevoked"`.
 */
export function useFrontDoorTokenRoleRevokedEvent(
  config: Omit<
    UseContractEventConfig<typeof frontDoorTokenABI, 'RoleRevoked'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    eventName: 'RoleRevoked',
    ...config,
  } as UseContractEventConfig<typeof frontDoorTokenABI, 'RoleRevoked'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link frontDoorTokenABI}__ and `eventName` set to `"Transfer"`.
 */
export function useFrontDoorTokenTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof frontDoorTokenABI, 'Transfer'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: frontDoorTokenABI,
    address: frontDoorTokenAddress,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof frontDoorTokenABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__.
 */
export function useRecruitmentRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"bountyClaim"`.
 */
export function useRecruitmentBountyClaim<
  TFunctionName extends 'bountyClaim',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'bountyClaim',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"candidateList"`.
 */
export function useRecruitmentCandidateList<
  TFunctionName extends 'candidateList',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'candidateList',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"candidateListForJob"`.
 */
export function useRecruitmentCandidateListForJob<
  TFunctionName extends 'candidateListForJob',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'candidateListForJob',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"candidateStatus"`.
 */
export function useRecruitmentCandidateStatus<
  TFunctionName extends 'candidateStatus',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'candidateStatus',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"companiesAddressList"`.
 */
export function useRecruitmentCompaniesAddressList<
  TFunctionName extends 'companiesAddressList',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'companiesAddressList',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"companyAddressToCandidateScore"`.
 */
export function useRecruitmentCompanyAddressToCandidateScore<
  TFunctionName extends 'companyAddressToCandidateScore',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'companyAddressToCandidateScore',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"companyAddressToHiredCandidateAddress"`.
 */
export function useRecruitmentCompanyAddressToHiredCandidateAddress<
  TFunctionName extends 'companyAddressToHiredCandidateAddress',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'companyAddressToHiredCandidateAddress',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"companyList"`.
 */
export function useRecruitmentCompanyList<
  TFunctionName extends 'companyList',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'companyList',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"companyScores"`.
 */
export function useRecruitmentCompanyScores<
  TFunctionName extends 'companyScores',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'companyScores',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"companyaccountBalances"`.
 */
export function useRecruitmentCompanyaccountBalances<
  TFunctionName extends 'companyaccountBalances',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'companyaccountBalances',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"companyaddressToScore"`.
 */
export function useRecruitmentCompanyaddressToScore<
  TFunctionName extends 'companyaddressToScore',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'companyaddressToScore',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"frontDoorToken"`.
 */
export function useRecruitmentFrontDoorToken<
  TFunctionName extends 'frontDoorToken',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'frontDoorToken',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"getAllJobsOfCompany"`.
 */
export function useRecruitmentGetAllJobsOfCompany<
  TFunctionName extends 'getAllJobsOfCompany',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'getAllJobsOfCompany',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"getCandidate"`.
 */
export function useRecruitmentGetCandidate<
  TFunctionName extends 'getCandidate',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'getCandidate',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"getCandidateHiredJobId"`.
 */
export function useRecruitmentGetCandidateHiredJobId<
  TFunctionName extends 'getCandidateHiredJobId',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'getCandidateHiredJobId',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"getCandidateListForJob"`.
 */
export function useRecruitmentGetCandidateListForJob<
  TFunctionName extends 'getCandidateListForJob',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'getCandidateListForJob',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"getCompanyScores"`.
 */
export function useRecruitmentGetCompanyScores<
  TFunctionName extends 'getCompanyScores',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'getCompanyScores',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"getMyRefferals"`.
 */
export function useRecruitmentGetMyRefferals<
  TFunctionName extends 'getMyRefferals',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'getMyRefferals',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"getReferralScores"`.
 */
export function useRecruitmentGetReferralScores<
  TFunctionName extends 'getReferralScores',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'getReferralScores',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"getReferrer"`.
 */
export function useRecruitmentGetReferrer<
  TFunctionName extends 'getReferrer',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'getReferrer',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"hasScoredCompany"`.
 */
export function useRecruitmentHasScoredCompany<
  TFunctionName extends 'hasScoredCompany',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'hasScoredCompany',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"isCompany"`.
 */
export function useRecruitmentIsCompany<
  TFunctionName extends 'isCompany',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'isCompany',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"isCompanyRegistered"`.
 */
export function useRecruitmentIsCompanyRegistered<
  TFunctionName extends 'isCompanyRegistered',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'isCompanyRegistered',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"jobCandidatehire"`.
 */
export function useRecruitmentJobCandidatehire<
  TFunctionName extends 'jobCandidatehire',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'jobCandidatehire',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"jobList"`.
 */
export function useRecruitmentJobList<
  TFunctionName extends 'jobList',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'jobList',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"owner"`.
 */
export function useRecruitmentOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"referralIndex"`.
 */
export function useRecruitmentReferralIndex<
  TFunctionName extends 'referralIndex',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'referralIndex',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"referralList"`.
 */
export function useRecruitmentReferralList<
  TFunctionName extends 'referralList',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'referralList',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"referralScores"`.
 */
export function useRecruitmentReferralScores<
  TFunctionName extends 'referralScores',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'referralScores',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"referrerList"`.
 */
export function useRecruitmentReferrerList<
  TFunctionName extends 'referrerList',
  TSelectData = ReadContractResult<typeof recruitmentABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'referrerList',
    ...config,
  } as UseContractReadConfig<typeof recruitmentABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__.
 */
export function useRecruitmentWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof recruitmentABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, TFunctionName, TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"claimBounty"`.
 */
export function useRecruitmentClaimBounty<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'claimBounty'
        >['request']['abi'],
        'claimBounty',
        TMode
      > & { functionName?: 'claimBounty' }
    : UseContractWriteConfig<typeof recruitmentABI, 'claimBounty', TMode> & {
        abi?: never
        functionName?: 'claimBounty'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'claimBounty', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'claimBounty',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"confirmReferral"`.
 */
export function useRecruitmentConfirmReferral<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'confirmReferral'
        >['request']['abi'],
        'confirmReferral',
        TMode
      > & { functionName?: 'confirmReferral' }
    : UseContractWriteConfig<
        typeof recruitmentABI,
        'confirmReferral',
        TMode
      > & {
        abi?: never
        functionName?: 'confirmReferral'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'confirmReferral', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'confirmReferral',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"disburseBounty"`.
 */
export function useRecruitmentDisburseBounty<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'disburseBounty'
        >['request']['abi'],
        'disburseBounty',
        TMode
      > & { functionName?: 'disburseBounty' }
    : UseContractWriteConfig<typeof recruitmentABI, 'disburseBounty', TMode> & {
        abi?: never
        functionName?: 'disburseBounty'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'disburseBounty', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'disburseBounty',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"hireCandidate"`.
 */
export function useRecruitmentHireCandidate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'hireCandidate'
        >['request']['abi'],
        'hireCandidate',
        TMode
      > & { functionName?: 'hireCandidate' }
    : UseContractWriteConfig<typeof recruitmentABI, 'hireCandidate', TMode> & {
        abi?: never
        functionName?: 'hireCandidate'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'hireCandidate', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'hireCandidate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"registerCompany"`.
 */
export function useRecruitmentRegisterCompany<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'registerCompany'
        >['request']['abi'],
        'registerCompany',
        TMode
      > & { functionName?: 'registerCompany' }
    : UseContractWriteConfig<
        typeof recruitmentABI,
        'registerCompany',
        TMode
      > & {
        abi?: never
        functionName?: 'registerCompany'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'registerCompany', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerCompany',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"registerJob"`.
 */
export function useRecruitmentRegisterJob<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'registerJob'
        >['request']['abi'],
        'registerJob',
        TMode
      > & { functionName?: 'registerJob' }
    : UseContractWriteConfig<typeof recruitmentABI, 'registerJob', TMode> & {
        abi?: never
        functionName?: 'registerJob'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'registerJob', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerJob',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"registerReferral"`.
 */
export function useRecruitmentRegisterReferral<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'registerReferral'
        >['request']['abi'],
        'registerReferral',
        TMode
      > & { functionName?: 'registerReferral' }
    : UseContractWriteConfig<
        typeof recruitmentABI,
        'registerReferral',
        TMode
      > & {
        abi?: never
        functionName?: 'registerReferral'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'registerReferral', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerReferral',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"registerReferrer"`.
 */
export function useRecruitmentRegisterReferrer<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'registerReferrer'
        >['request']['abi'],
        'registerReferrer',
        TMode
      > & { functionName?: 'registerReferrer' }
    : UseContractWriteConfig<
        typeof recruitmentABI,
        'registerReferrer',
        TMode
      > & {
        abi?: never
        functionName?: 'registerReferrer'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'registerReferrer', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerReferrer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useRecruitmentRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof recruitmentABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'renounceOwnership', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useRecruitmentTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof recruitmentABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof recruitmentABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof recruitmentABI, 'transferOwnership', TMode>({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__.
 */
export function usePrepareRecruitmentWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, TFunctionName>,
    'abi' | 'address'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    ...config,
  } as UsePrepareContractWriteConfig<typeof recruitmentABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"claimBounty"`.
 */
export function usePrepareRecruitmentClaimBounty(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'claimBounty'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'claimBounty',
    ...config,
  } as UsePrepareContractWriteConfig<typeof recruitmentABI, 'claimBounty'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"confirmReferral"`.
 */
export function usePrepareRecruitmentConfirmReferral(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'confirmReferral'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'confirmReferral',
    ...config,
  } as UsePrepareContractWriteConfig<typeof recruitmentABI, 'confirmReferral'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"disburseBounty"`.
 */
export function usePrepareRecruitmentDisburseBounty(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'disburseBounty'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'disburseBounty',
    ...config,
  } as UsePrepareContractWriteConfig<typeof recruitmentABI, 'disburseBounty'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"hireCandidate"`.
 */
export function usePrepareRecruitmentHireCandidate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'hireCandidate'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'hireCandidate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof recruitmentABI, 'hireCandidate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"registerCompany"`.
 */
export function usePrepareRecruitmentRegisterCompany(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'registerCompany'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerCompany',
    ...config,
  } as UsePrepareContractWriteConfig<typeof recruitmentABI, 'registerCompany'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"registerJob"`.
 */
export function usePrepareRecruitmentRegisterJob(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'registerJob'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerJob',
    ...config,
  } as UsePrepareContractWriteConfig<typeof recruitmentABI, 'registerJob'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"registerReferral"`.
 */
export function usePrepareRecruitmentRegisterReferral(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'registerReferral'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerReferral',
    ...config,
  } as UsePrepareContractWriteConfig<typeof recruitmentABI, 'registerReferral'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"registerReferrer"`.
 */
export function usePrepareRecruitmentRegisterReferrer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'registerReferrer'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'registerReferrer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof recruitmentABI, 'registerReferrer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareRecruitmentRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'renounceOwnership'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof recruitmentABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link recruitmentABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareRecruitmentTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof recruitmentABI, 'transferOwnership'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof recruitmentABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__.
 */
export function useRecruitmentEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, TEventName>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"BountyDisburse"`.
 */
export function useRecruitmentBountyDisburseEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'BountyDisburse'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'BountyDisburse',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'BountyDisburse'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"CandidateHired"`.
 */
export function useRecruitmentCandidateHiredEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'CandidateHired'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'CandidateHired',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'CandidateHired'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"CandidateHiredSuccesfullyAfter90Days"`.
 */
export function useRecruitmentCandidateHiredSuccesfullyAfter90DaysEvent(
  config: Omit<
    UseContractEventConfig<
      typeof recruitmentABI,
      'CandidateHiredSuccesfullyAfter90Days'
    >,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'CandidateHiredSuccesfullyAfter90Days',
    ...config,
  } as UseContractEventConfig<
    typeof recruitmentABI,
    'CandidateHiredSuccesfullyAfter90Days'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"CompanyScoreSubmitted"`.
 */
export function useRecruitmentCompanyScoreSubmittedEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'CompanyScoreSubmitted'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'CompanyScoreSubmitted',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'CompanyScoreSubmitted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"DepositCompleted"`.
 */
export function useRecruitmentDepositCompletedEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'DepositCompleted'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'DepositCompleted',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'DepositCompleted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"JobCreated"`.
 */
export function useRecruitmentJobCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'JobCreated'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'JobCreated',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'JobCreated'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useRecruitmentOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'OwnershipTransferred'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"PercentagesCompleted"`.
 */
export function useRecruitmentPercentagesCompletedEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'PercentagesCompleted'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'PercentagesCompleted',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'PercentagesCompleted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"ReferCandidateSuccess"`.
 */
export function useRecruitmentReferCandidateSuccessEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'ReferCandidateSuccess'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'ReferCandidateSuccess',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'ReferCandidateSuccess'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"ReferralConfirmed"`.
 */
export function useRecruitmentReferralConfirmedEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'ReferralConfirmed'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'ReferralConfirmed',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'ReferralConfirmed'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"ReferralRejected"`.
 */
export function useRecruitmentReferralRejectedEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'ReferralRejected'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'ReferralRejected',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'ReferralRejected'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"ReferralScoreSubmitted"`.
 */
export function useRecruitmentReferralScoreSubmittedEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'ReferralScoreSubmitted'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'ReferralScoreSubmitted',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'ReferralScoreSubmitted'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link recruitmentABI}__ and `eventName` set to `"RegisterReferral"`.
 */
export function useRecruitmentRegisterReferralEvent(
  config: Omit<
    UseContractEventConfig<typeof recruitmentABI, 'RegisterReferral'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: recruitmentABI,
    address: recruitmentAddress,
    eventName: 'RegisterReferral',
    ...config,
  } as UseContractEventConfig<typeof recruitmentABI, 'RegisterReferral'>)
}
