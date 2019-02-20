class SolidusAddressAutocompleteRenameMexicoStates < SolidusSupport::Migration[5.0]
  def up
    mexico = Spree::State.find_by abbr: 'MEX'
    mexico.update_attribute :name, 'Estado de México'

    cdmx = Spree::State.find_by abbr: 'DIF'
    cdmx.update_attributes name: 'Ciudad de México', abbr: 'CDMX'
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
