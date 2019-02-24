class UsersController < ApplicationController

  def index
    # binding.pry
    # @users = User.where('name LIKE(?) and (id != ?)', "%#{params[:keyword]}%", "#{current_user.id}").limit(10)
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%")
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
