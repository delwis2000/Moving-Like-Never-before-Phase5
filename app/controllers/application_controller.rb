class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def current_client
    @current_client ||= Client.find_by_id(session[:client_id])
  end
  def render_record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
   def render_not_found(error)
    render json: { errors: [error] }, status: :not_found
  end
  def render_not_logged_in
    render json: { errors: ['You are not logged in.'] }, status: :unauthorized
  end
end












