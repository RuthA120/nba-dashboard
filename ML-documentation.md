# Exploring Potential Similarity/ML Models

## Similarity Metrics

---

### **Euclidean Distance**
The distance between two points in Euclidean space. In order to find this distance, the length of the line segment that connects the two points should be measured.

**Key Points:**
- Finding the shortest possible line between two points  
- Measuring the straightest and shortest path between two points  
- Metric is based on the Pythagorean theorem  

**When to Use:**
- Needed when direct distances are required  
- A straightforward way to see how far apart things are  
- Can be used in different algorithms, such as:
    - **K-Nearest Neighbors (KNN):** Finds the nearest neighbors to a point, useful for classification (e.g., spam detection, product recommendations)
    - **K-Means Clustering:** Sorts data points into groups by connecting each point to the nearest cluster center (e.g., organizing data into categories with shared similarities)

**Limitations:**
- Affected by the scale of features when ranges differ greatly  
- Influenced by outliers, making distances misleading  

**References:**
- [GeeksforGeeks](https://www.geeksforgeeks.org/maths/euclidean-distance/)  
- [DataCamp](https://www.datacamp.com/tutorial/euclidean-distance)  

---

### **Manhattan Distance**
A metric used to determine the distance between two points in a grid-like path.

**Key Points:**
- Measures the sum of the absolute differences between the coordinates of the points  
- Uses absolute value to ensure all distances are non-negative  
- Useful for high-dimensional data  
- Works well with discrete or ordinal data  

**Reference:**
- [DataCamp](https://www.datacamp.com/tutorial/manhattan-distance)  

---

### **Pearson Correlation Coefficient**
Used to measure the strength and direction of a linear relationship between two variables.

**Key Points:**
- Quantifies how two variables are related, useful for pattern detection and prediction  
- Assumes a linear relationship and normal distribution  

**Formula:**
- Shows **direction** (positive/negative) and **magnitude** (strength) of the relationship  

---

### **Cosine Similarity**
A measure of similarity between two vectors based on the cosine of the angle between them.

**Key Points:**
- Measures similarity irrespective of magnitude  
- Common in text analytics (e.g., document similarity)  
- Applications: recommendation systems, clustering, semantic similarity, graph databases  
- Sensitive to sparse data  
- Ignores magnitude differences  


**References:**
- [GeeksforGeeks](https://www.geeksforgeeks.org/dbms/cosine-similarity/)  
- [Memgraph](https://memgraph.com/blog/cosine-similarity-python-scikit-learn)  

---

### **k-Nearest Neighbors (KNN)**
A supervised ML algorithm used for classification.

**How It Works:**
- Finds the **k** closest data points to a given input  
- Predicts the class based on the majority vote of neighbors  
- Can use **Euclidean**, **Manhattan**, or **Minkowski** distance metrics  

**Applications:**
- Recommendation systems  
- Spam detection  
- Customer segmentation  
- Speech recognition  

**Advantages:**
- Simple  
- No training phase  
- Few parameters  
- Works for classification & regression  

**Disadvantages:**
- Slow with large datasets  
- Struggles with many features  
- Can overfit  

**Reference:**
- [GeeksforGeeks](https://www.geeksforgeeks.org/machine-learning/k-nearest-neighbours/)  

