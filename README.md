# Front-Door

## Introduction

The Recruitment ecosystem is highly fragmented, participants have conflicting incentives, and collaboration is fraught with friction.
Improved collaboration would:

- Deepen the talent pools that hiring entities can access
- Enable recruitment firms to reduce wasted effort and increase client satisfaction
- Enable individuals and community leads to refer-to-earn from their professional networks
  Front Door uses Web3 tools and technology to solve a Web2 human coordination problem with a huge size prize.

We are looking for Development Partners to beta-test the Application and give us feedback for improvement. If you interested in doing so please reach out to Thomas@Front-Door.xyz

## Problem

Key factors block scalable cooperation within the Recruitment ecosystem, revolving around Trust, Reputation, Incentive Design, and Transparency.

- Need for Trust: you give your value up front, having to trust the other party for payment, and employers need to trust the quality of referral.
- Lack of Transparency: referrals you make, whether you’re a professional recruiter, an individual candidate, or referring a friend, feel like they go into a black box and it can be hard to know what (if anything) happened.
- Reputation Locus: if you collaborate with another network participant, you build their reputation, not your own. A painful Catch-22.
- Ephemeral Reputation: it’s hard to tangibly demonstrate your value, so you’re only as good as your last referral, or your personal brand on social.
- Poor Incentive Structures: individuals referring someone from their personal network carry higher reputational risk but with 10x lower rewards.

## Solution

We are building a transparent referral system. We believe that as the Web3 world brings opportunities to each and every individual, Front Door can unlock incentive mechanisms that ensure quality of the jobs being posted & quality of candidates being hired through our platform.
Our solution involves 3 user personas:

- Companies -- Posting jobs and hiring candidates. Providing the recruitment bounty to incentivize referrals
- Referrers -- Introducing trusted candidates to jobs, this activity forms the basis of an on-chain reputation system
- Referee/Candidate -- People looking for jobs

#### Data Model

Core logic and data are stored in Smart contracts, namely information about jobId, bounty, registration of referrals, and so on.
Polybase for Off-chain data as jobs, candidates and referrers have so much data to work with we store data off-chain that is not required by the on-chain methods.
Polybase collection -- https://explorer.testnet.polybase.xyz/studio/pk%2F0xbaeff2028f7c15332ab23549f09c33eee5cb9231559067afe56f975ea6a4b660b1e32eead19b6a8bd48d8347fa3753c8749d43b9a8716905c0fc8a3c70e3e9b1%2Fnavh-final

#### Companies

Companies require candidate applicants and post jobs to source candidates and hire through the platform. Each job posted has a bounty associated (part of the incentive mechanism). This bounty is collected to make sure the jobs being posted are important and legitimate. Bounties incentivise Referrers to refer their contacts to the company's job.

Companies can control their applicant pool, hire, review, and pay for the recruitment service all through the site.

#### Referrers

Referrers are the introducers of high-quality candidates to jobs. Referrer reputations are based on the reviews Hiring Companies give their candidates on-chain.
Referrers introduce a candidate/referee with the candidate's email and CV/profile.

#### Candidate/ Referee

Once a Referrer refers a Candidate, the Candidate receives an email from Front Door. This mail has a link to the website that allows the Candidate to confirm the referral. Upon confirmation, the candidate is added to the Hiring Companies applicant pool for that specific job.

# Role of Bounty: Gamechanger

###### Bounty Distribution

- Referrer Share -- 65%
- Candidate Share -- 10%
- Front Door Share -- 25%

Bounties are fairly distributed to the key stakeholders to incentivize productive behavior and encourage broad adoption.
[Future Scope] -- We plan to introduce scoring mechanisms to increase transparency. Each persona Referrer, Company, and Candidate will have a on Chain Score. This Score can be used to verify the authenticity of stakeholders.


This is a [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) project bootstrapped with [`create-rainbowkit`](https://github.com/rainbow-me/rainbowkit/tree/main/packages/create-rainbowkit).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Create Contracts Webhooks - Update Contracts
- Copy new contracts into contracts folder.
- If needed update addresses or abis in `wagmi.config.ts`
- From console, execute `npx wagmi generate`

## .env.local
a .env.local file is required to run this application:

```
NEXT_PUBLIC_PROJECT_ID=<WALLET CONNECT PROJECT ID>
NEXT_PUBLIC_APP_NAME='Front Door'
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
