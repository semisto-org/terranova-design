import data from '@/../product/sections/lab-management/data.json'
import { SemosDashboard } from './components/SemosDashboard'

export default function SemosDashboardPreview() {
  // Use the first member as the current user for preview
  const currentMemberId = data.members[0].id

  return (
    <SemosDashboard
      members={data.members}
      wallets={data.wallets}
      transactions={data.semosTransactions}
      emissions={data.semosEmissions}
      rates={data.semosRates}
      currentMemberId={currentMemberId}
      onTransferSemos={(toWalletId, amount, description) =>
        console.log('Transfer Semos:', { toWalletId, amount, description })
      }
      onEmitSemos={(walletId, amount, reason, description) =>
        console.log('Emit Semos:', { walletId, amount, reason, description })
      }
      onUpdateRate={(rateId, amount) =>
        console.log('Update rate:', { rateId, amount })
      }
      onViewTransaction={(transactionId) =>
        console.log('View transaction:', transactionId)
      }
    />
  )
}
