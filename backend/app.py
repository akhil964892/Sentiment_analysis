# from flask import Flask, request, jsonify
# from transformers import AutoTokenizer, AutoModelForSequenceClassification
# from nltk.sentiment import SentimentIntensityAnalyzer
# from scipy.special import softmax
# import torch
# import nltk

# app = Flask(__name__)

# # Sentiment function using RoBERTa
# def polarity_scores_roberta(text, tokenizer, model):
#     encoded_text = tokenizer(text, return_tensors='pt')
#     with torch.no_grad():
#         output = model(**encoded_text)
#     scores = output[0][0].detach().numpy()
#     scores = softmax(scores)
#     return {
#         'roberta_neg': float(scores[0]),
#         'roberta_neu': float(scores[1]),
#         'roberta_pos': float(scores[2])
#     }

# @app.route('/analyze', methods=['POST'])
# def analyze():
#     data = request.json
#     text = data.get("text", "")

#     vader_scores = vader.polarity_scores(text)
#     vader_scores = {f"vader_{k}": float(v) for k, v in vader_scores.items()}
#     roberta_scores = polarity_scores_roberta(text, tokenizer, model)

#     return jsonify({**vader_scores, **roberta_scores})

# # Windows multiprocessing safe zone
# if __name__ == '__main__':
#     nltk.download('vader_lexicon')
#     vader = SentimentIntensityAnalyzer()

#     model_name = "cardiffnlp/twitter-roberta-base-sentiment"
#     tokenizer = AutoTokenizer.from_pretrained(model_name)
#     model = AutoModelForSequenceClassification.from_pretrained(model_name)

#     app.run(debug=True)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# app = Flask(__name__)
# CORS(app)

# # Simulate RoBERTa with dummy data (you can replace with actual model logic)
# def dummy_roberta_scores(text):
#     return {
#         "roberta_neg": 0.1,
#         "roberta_neu": 0.3,
#         "roberta_pos": 0.6
#     }

# @app.route('/analyze', methods=['POST'])
# def analyze():
#     data = request.get_json()
#     text = data.get('text', '')

#     # VADER analysis
#     analyzer = SentimentIntensityAnalyzer()
#     vader_scores = analyzer.polarity_scores(text)

#     # Dummy RoBERTa analysis
#     roberta_scores = dummy_roberta_scores(text)

#     return jsonify({
#         "vader_neg": vader_scores['neg'],
#         "vader_neu": vader_scores['neu'],
#         "vader_pos": vader_scores['pos'],
#         "vader_compound": vader_scores['compound'],
#         "roberta_neg": roberta_scores['roberta_neg'],
#         "roberta_neu": roberta_scores['roberta_neu'],
#         "roberta_pos": roberta_scores['roberta_pos'],
#     })

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F

app = Flask(__name__)
CORS(app)

# Load RoBERTa tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-sentiment")
model = AutoModelForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-sentiment")
labels = ['negative', 'neutral', 'positive']

# RoBERTa sentiment analysis function
def roberta_sentiment(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
    probs = F.softmax(outputs.logits, dim=-1).squeeze().tolist()
    return {
        "roberta_neg": probs[0],
        "roberta_neu": probs[1],
        "roberta_pos": probs[2]
    }

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get('text', '')

    # VADER analysis
    analyzer = SentimentIntensityAnalyzer()
    vader_scores = analyzer.polarity_scores(text)

    # Real RoBERTa analysis
    roberta_scores = roberta_sentiment(text)

    return jsonify({
        "vader_neg": vader_scores['neg'],
        "vader_neu": vader_scores['neu'],
        "vader_pos": vader_scores['pos'],
        "vader_compound": vader_scores['compound'],
        **roberta_scores
    })

if __name__ == '__main__':
    app.run(debug=True)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# app = Flask(__name__)
# CORS(app)  # Allow cross-origin requests (useful for connecting to React frontend)

# # Dummy RoBERTa sentiment scores (replace with real model integration if needed)
# def dummy_roberta_scores(text):
#     # You can plug in actual RoBERTa logic here
#     return {
#         "roberta_neg": 0.1,
#         "roberta_neu": 0.3,
#         "roberta_pos": 0.6
#     }

# @app.route('/analyze', methods=['POST'])
# def analyze():
#     data = request.get_json()
#     text = data.get('text', '')

#     # VADER Sentiment Analysis
#     analyzer = SentimentIntensityAnalyzer()
#     vader_scores = analyzer.polarity_scores(text)

#     # Simulated RoBERTa Sentiment Analysis
#     roberta_scores = dummy_roberta_scores(text)

#     # Combine results
#     result = {
#         "vader_neg": vader_scores['neg'],
#         "vader_neu": vader_scores['neu'],
#         "vader_pos": vader_scores['pos'],
#         "vader_compound": vader_scores['compound'],
#         "roberta_neg": roberta_scores['roberta_neg'],
#         "roberta_neu": roberta_scores['roberta_neu'],
#         "roberta_pos": roberta_scores['roberta_pos'],
#     }

#     return jsonify(result)

# if __name__ == '__main__':
#     app.run(debug=True)
