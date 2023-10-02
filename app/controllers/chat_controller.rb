class ChatController < ApplicationController 

    def test_chat 
        user_message = "Give me 5 beginner English words with their Spanish translations."
        chat_service = ChatService.new(message:)
        @response = chat_service.call
        render json: {response: @response}
    end

end
