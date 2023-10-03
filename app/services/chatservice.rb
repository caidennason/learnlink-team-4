class ChatService
    attr_reader :message 

    def initialize(message:)
        @message = message
    end

    def call 
        messages = training_prompts.map do |prompt|
            { role: "system", content: prompt}
          end
      
          messages << { role: "user", content: message}
      
          response = client.chat(
            parameters: {
              model: "gpt-3.5-turbo",
              messages: messages,
              temperature: 0.7,
            }
          )
      
          response.dig("choices", 0, "message", "content")
    end

    private 

    def training_prompts = [
        "You are a Spanish teacher in California who is teaching a 9th grade class of English speaking students.",
        "You are a Spanish teacher in California who is teaching a 10th grade class of English speaking students."
    ]

    def client
        @_client ||= OpenAI::Client.new(access_token: Rails.application.credentials.open_ai_api_key)
    end
end

