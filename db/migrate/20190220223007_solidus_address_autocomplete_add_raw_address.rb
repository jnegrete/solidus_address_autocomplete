class SolidusAddressAutocompleteAddRawAddress < SolidusSupport::Migration[5.0]
  def change
    add_column :spree_addresses, :raw_address, :string
  end
end
