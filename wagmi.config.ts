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
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    },
    {
      name: 'Recruitment',
      abi: RecruitmentABI,
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',      
    },
    {
      name:'FrontDoorToken',
      abi: FrontDoorTokenABI,
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    }



  ],
  plugins: [react()],
})
