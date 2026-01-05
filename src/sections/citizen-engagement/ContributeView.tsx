import data from '@/../product/sections/citizen-engagement/data.json'
import { ContributeView } from './components/ContributeView'

export default function ContributeViewPreview() {
  // Get current citizen for demo (first citizen)
  const currentCitizen = data.citizens[0]

  return (
    <ContributeView
      campaigns={data.campaigns}
      wishlistItems={data.wishlistItems}
      worksites={data.worksites}
      currentCitizen={currentCitizen}
      onDonateToCampaign={(campaignId, amount) =>
        console.log('Donate to campaign:', campaignId, 'Amount:', amount)
      }
      onFundWishlistItem={(itemId, quantity) =>
        console.log('Fund wishlist item:', itemId, 'Quantity:', quantity)
      }
      onJoinWorksite={(worksiteId) =>
        console.log('Join worksite:', worksiteId)
      }
      onLeaveWorksite={(worksiteId) =>
        console.log('Leave worksite:', worksiteId)
      }
    />
  )
}
