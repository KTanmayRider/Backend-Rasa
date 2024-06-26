# actions/actions.py
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

class ActionUtterResponse(Action):

    def name(self) -> str:
        return "action_utter_response"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: dict) -> list:

        intent = tracker.latest_message['intent'].get('name')

        if intent == "ask_about_company":
            response = "Green Rider Technology is a company focused on providing AI and machine learning solutions."
        elif intent == "ask_about_services":
            response = "We offer a variety of services including AI consulting, data science, machine learning development, and more."
        elif intent == "ask_about_ai_training":
            response = "Our AI training programs cover topics such as machine learning, data science, and natural language processing."
        else:
            response = "I'm here to help with any questions you have about our company and services."

        dispatcher.utter_message(text=response)
        return []
