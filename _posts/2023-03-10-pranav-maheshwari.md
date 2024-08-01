---
layout: post
title: "Quantum Error Correction Codes - Stabilizer Formalism"
subtitle: Quantum Information 
Location: LHC 107
Time: 18:30  → 20:00
# gh-repo:
# gh-badge: [star, fork, follow]
# cover-img: /assets/img/.jpg
thumbnail-img: "assets/img/Jan23/Pranav-thumb.png"
# share-img: /assets/img/.jpg
tags: [QI, GRAVITY, EXPERIMENT]
comments: true
mathjax: true
author: Pranav Maheshwari
email: pranav.maheshwari_AT_students.iiserpune.ac.in
position: "4th year BS-MS"
wantimage: true
pdf: "assets/pdfs/Jan23/Pranav.pdf"
images:
  # - path: "assets/img/Jan23/Pranav.jpg"
  # - path: "assets/img/Jan23/Pranav1.jpg"
  # - path: "assets/img/Jan23/Pranav2.jpg"
---
{: .box-note}
Quantum Computing has a lot of possible advantageous uses over classical computing but presently the field is in its infancy. The biggest challenge for it is to get rid of noise or become robust against errors. Dealing with noise in physical systems is the major crux of Quantum Information. Quantum Error Correction Codes are the essential requirement for fault tolerant computing which can make Quantum Computing truly implementable.
/
To secure information stored in say k qubits, we can encode the state in n>k physical qubits. These n qubits may see some errors which could be detected using our code. We'll look at simplest codes that can prevent such errors and then further discuss the Stabilizer Codes which harness properties of Pauli Matrices and their group structures to detect and correct errors. I will explain all steps involved from encoding to decoding with limitations and problems in the same. Finally, I'll briefly introduce what fault tolerant computation means and the current research interests in quantum error correction.