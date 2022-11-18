# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]
gem "kramdown-parser-gfm" if ENV["JEKYLL_VERSION"] == "~> 3.9"

group :jekyll_plugins do
  gem 'jekyll-environment-variables'
  gem 'jekyll-feed'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem 'jekyll-multiple-languages-plugin'
end
