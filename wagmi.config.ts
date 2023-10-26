import { defineConfig } from '@wagmi/cli'
import {abi as FNDR_FaucetABI} from './contracts/FNDR_Faucet'
import {abi as RecruitmentABI} from './contracts/Recruitment'
import {abi as FrontDoorTokenABI} from './contracts/FrontDoorToken'
import { react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'FNDR_Faucet',
      abi: FNDR_FaucetABI,
      address: '0x903De7b6AB3cA31C9C3b277877fC4c405FCBEdc8',
    },
    {
      name: 'Recruitment',
      abi: RecruitmentABI,
      address: '0x97aF0EA692194f634d44C311288b172DFa8742A8',      
    },
    {
      name:'FrontDoorToken',
      abi: FrontDoorTokenABI,
      address: '0x53736EdEa0B813f0E95f10bac6B91876ed8114db'
    }
  ],
  plugins: [react()],
})
