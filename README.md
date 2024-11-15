# Diagnose Test Probability Calculator 

Great question! The probability of disease given a positive test is not necessarily 100% because diagnostic tests are not perfect. They have certain characteristics, such as sensitivity and specificity, which affect their accuracy.

Here's a breakdown of the key concepts:

Prevalence (P(Disease)): The proportion of the population that has the disease.
Sensitivity (P(Test+|Disease+)): The probability that the test is positive given that the person has the disease.
Specificity (P(Test-|Disease-)): The probability that the test is negative given that the person does not have the disease.
When you get a positive test result, you want to know the probability that you actually have the disease. This is known as the positive predictive value (PPV), or P(Disease|Test+). It takes into account not only the sensitivity and specificity of the test but also the prevalence of the disease in the population.

The formula used in your code to calculate this is derived from Bayes' Theorem:

[ P(Disease|Test+) = \frac{P(Test+|Disease) \cdot P(Disease)}{P(Test+|Disease) \cdot P(Disease) + P(Test+|No Disease) \cdot P(No Disease)} ]

This formula considers both true positives and false positives to give a more accurate probability.

Similarly, the probability of not having the disease given a negative test result (negative predictive value, NPV) is calculated using:

[ P(Disease|Test-) = \frac{P(Test-|No Disease) \cdot P(No Disease)}{P(Test-|No Disease) \cdot P(No Disease) + P(Test-|Disease) \cdot P(Disease)} ]

In summary, the probability of having the disease given a positive test result is not 100% because the test can produce false positives. The calculation accounts for the test's sensitivity, specificity, and the prevalence of the disease to provide a more accurate probability.
# Diagnostic-Test-Probability-Calculator
