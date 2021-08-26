class UsersController < ApplicationController
    wrap_parameters format: []
   skip_before_action :authorize, only: [:create]
    def create  
    user = User.create(username: user_params)
    render json:user 
   end 

   //login route 

   private 

   def user_params
    params.permit(:username, :password)
   end 

end
