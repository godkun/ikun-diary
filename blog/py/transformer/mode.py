import torch
import torch.nn as nn

class InputEmbedding(nn.Module):

    def __init__(self, vocab_size, d_model):
        super(InputEmbedding, self).__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.d_model = d_model
        self.vocab_size = vocab_size