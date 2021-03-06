# encoding: UTF-8
$:.push File.expand_path('../lib', __FILE__)
require 'solidus_address_autocomplete/version'

Gem::Specification.new do |s|
  s.name        = 'solidus_address_autocomplete'
  s.version     = SolidusAddressAutocomplete::VERSION
  s.summary     = 'Address autocomplete'
  s.description = 'Bringing the concept of autocomplete shipping address using google places api'
  s.license     = 'BSD-3-Clause'

  s.author    = 'Magmalabs'
  s.email     = 'developers@magmalabs.com'
  s.homepage  = 'https://www.magmalabs.io'

  s.files = Dir["{app,config,db,lib}/**/*", 'LICENSE', 'Rakefile', 'README.md']
  s.test_files = Dir['test/**/*']

  s.add_dependency 'solidus_core', ['>= 1.1', '< 3']
  s.add_dependency 'solidus_support'

  s.add_development_dependency 'capybara'
  s.add_development_dependency 'poltergeist'
  s.add_development_dependency 'coffee-rails'
  s.add_development_dependency 'sass-rails'
  s.add_development_dependency 'database_cleaner'
  s.add_development_dependency 'factory_girl'
  s.add_development_dependency 'rspec-rails'
  s.add_development_dependency 'rubocop', '0.49.0'
  s.add_development_dependency 'rubocop-rspec', '1.4.0'
  s.add_development_dependency 'simplecov'
  s.add_development_dependency 'sqlite3'
end
