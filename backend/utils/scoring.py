import numpy as np

from utils.scl_mapping import SCL_MAPPING
from utils.tscore_lookup import lookup_tscore


def compute_dimension_averages(answers):

    averages = {}

    for dimension, questions in SCL_MAPPING.items():

        indices = [q-1 for q in questions]

        values = [answers[i] for i in indices]

        averages[dimension] = float(np.mean(values))

    return averages


def compute_t_scores(averages):

    # RAW value used for lookup
    raw = averages["ANX"]

    tscores = lookup_tscore(raw)

    return tscores