class ClientsController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only: [:create]
        def index
          render json: Client.all
        end
        def create
          
          client = Client.create!(client_params)
          if client.valid?
            session[:client_id] = client.id
            render json: client, status: :created
          else
            render json: { error: client.errors.full_messages }, status: :unprocessable_entity
          end
        end
      def show
          client = current_client
          if client
          render json: client
          else
             render_not_logged_in
          end
      end
      private
      def client_params
          params.permit(:client, :name, :password, :email, :cell, :location)
      end
      def authorize
          return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :client_id
      end
end
