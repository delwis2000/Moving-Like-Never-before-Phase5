class MoversController < ApplicationController

    def index
        render json: Mover.all
    end 
    def show
        movers = find_mover
        render json: movers
    end
    def create
        movers = Mover.create!(mover_params)
        render json: movers
    end
    def update
        movers = find_mover
        movers.update!(mover_params)
        render json: movers
    end
 def destroy
    movers = find_mover
    # owner = Client.find(parms[:owned_by_id])
    # if movers
        movers.destroy!
        head :no_content
    # end
  end
#, dependent: :destroy
    private
    def find_mover
        Movers.find(params[:id])
    end
    def mover_params
        params.permit(:name, :email, :cell, :rate, :description)
    end
end
