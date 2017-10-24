class Api::CommentsController < Api::ApplicationController
  def index
    render json: %w(a b c d e).shuffle
  end
end
