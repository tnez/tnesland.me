---
path: "/blog/post/euclidean-dist-between-rois"
date: "2014-10-21"
title: "Calculating Euclidean distances between centers of regions of interest"
tags: [neuroimaging,data-analysis,python,scipy,roi,brain,science]
heroImg: "./hero.jpg"
---

A collaborator is using connectivity data that we had generated to validate his model. We have previously given him `N x N` connectivity matrices representing the connections between regions of interest (ROIs) for each subject but in addition to these he needs the Euclidean distance between all possible pairs of ROIs. This is all *super* easy using [SciPy's](https://www.scipy.org) center of mass function:

```python
# given a *D* dimensional array *I* where *N* regions, denoted by
# sequential integers starting at 1, return an NxD array *coords*
# containing the centers of mass for each region (in index space) and
# an NxN array *Dist* where the entry D[i,j] corresponds to the euclidean
# distance between the centers of regions i and j respectively.
import numpy as np
from scipy.ndimage.measurements import center_of_mass

D = I.ndim
N = I[:].max()

coords = np.asarray(center_of_mass(I,I,range(1,N+1)))

euc_dist = lamda x,y: np.sqrt(np.sum((y-x)**2))

distance = np.zeros((N,N))
for i in range(0,N):
    for j in range(i,N):
        _distance = euc_dist(coords[i],coords[j])
        distance[i,j] = _distance
        distance[j,i] = _distance
```
