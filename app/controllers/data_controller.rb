class DataController < ApplicationController

    def index
        render json: Datum.all
    end 
    def show
        data = find_datum
        render json: data
    end
    def create
        data = Datum.create!(datum_params)
        render json: data
    end
    def update
        data = find_datum
        data.update!(datum_params)
        render json: data
    end
 def destroy
    data = find_datum
    # owner = Client.find(parms[:owned_by_id])
    # if data
        data.destroy!
        head :no_content
    # end
  end
#, dependent: :destroy
    private
    def find_datum
        Datum.find(params[:id])
    end
    def datum_params
        params.permit(:startLocation, :endingLocation, :price, :note, :client_id, :mover_id)
    end
end
