import data from '@/../product/sections/website/data.json'
import { ProductCatalog } from './components/ProductCatalog'

export default function ProductCatalogPreview() {
  // Get unique countries from products
  const allCountries = new Set<string>()
  data.products.forEach(p => p.countries.forEach(c => allCountries.add(c)))
  const availableCountries = Array.from(allCountries).sort()

  return (
    <ProductCatalog
      products={data.products}
      currentCountry="BE"
      availableCountries={availableCountries}
      cartItemCount={2}
      onProductView={(id) => console.log('View product:', id)}
      onAddToCart={(id, qty) => console.log('Add to cart:', id, 'quantity:', qty)}
      onCartOpen={() => console.log('Open cart')}
      onCountryChange={(country) => console.log('Change country:', country)}
      onFilter={(filters) => console.log('Filter products:', filters)}
    />
  )
}
