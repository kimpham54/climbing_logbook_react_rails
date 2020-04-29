Rails.application.routes.draw do
	namespace :api do
		namespace :v1 do
			resources :routes
			resources :locations


			resources :locations, only: [:index] do
				resources :routes, only: [:show, :index, :update, :create]
			end
		end
	end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# fetch('https://localhost:3000/api/v1/routes')

end
