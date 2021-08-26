class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
           session[:user_id] = user.id
           render json:user 
        else 
            render json: {error: ['Invalid user and/or password']}
        end 
       end 

       def destory
        session.delete :user_id 
       end 

end
