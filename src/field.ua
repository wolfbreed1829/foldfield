# Each actor row is a signed geodesic distance plus one.
# The entire wave bank is transformed and reduced as an array.
D ← °json &fras "travel.json"
W ← × ± D ÷ +1×0.035 ⌵ D ∿×0.55-1 ⌵ D
F ← ÷ √ ⧻D /+ W
&fwa "field.json" json F
