# Build the complete canonical source-wave bank, before superposition.
# Every coefficient used by the browser is calculated here in Uiua.
D ← °json &fras "travel.json"
W ← × ± D ÷ +1×0.035 ⌵ D ∿×0.55-1 ⌵ D
&fwa "kernels.json" json W
