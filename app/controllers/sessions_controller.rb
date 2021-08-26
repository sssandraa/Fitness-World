class SessionsController < ApplicationController

    def login
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
