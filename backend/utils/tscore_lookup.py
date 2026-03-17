import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

table_path = os.path.join(BASE_DIR, "data", "tscore_table.csv")

tscore_table = pd.read_csv(table_path)


def lookup_tscore(raw_avg):

    idx = (tscore_table["RAW"] - raw_avg).abs().idxmin()

    row = tscore_table.loc[idx]

    return {
        "SOM": int(row["SOM"]),
        "OC": int(row["OC"]),
        "IS": int(row["IS"]),
        "DEP": int(row["DEP"]),
        "ANX": int(row["ANX"]),
        "HOS": int(row["HOS"]),
        "PHOB": int(row["PHOB"]),
        "PAR": int(row["PAR"]),
        "PSY": int(row["PSY"])
    }
