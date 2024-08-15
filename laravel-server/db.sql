-- Table: admins [created]
CREATE TABLE admins (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: students [created]
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(255) UNIQUE NOT NULL,
  gender ENUM('male', 'female'),
  status ENUM('0', '1') DEFAULT '1',
  image VARCHAR(255),
  wallet BIGINT DEFAULT 0,
  points BIGINT DEFAULT 0,
  fcm_token VARCHAR(255),
  code VARCHAR(255),
  expire TIMESTAMP,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: contacts
CREATE TABLE contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  facebook VARCHAR(255),
  linkedin VARCHAR(255),
  instagram VARCHAR(255),
  address TEXT, -- translations
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: settings
CREATE TABLE settings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  app_name VARCHAR(255) NOT NULL,
  logo VARCHAR(255) NOT NULL,
  location VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: categories [created]
CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL, -- translations
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Table: courses [created]
CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category_id INT NOT NULL,
  name VARCHAR(255) NOT NULL, -- translations
  image VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT, -- translations
  requirements TEXT, -- translations
  average_rate DOUBLE DEFAULT 0,
  count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Table: lectures  [created]
CREATE TABLE lectures (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT NOT NULL,
  title VARCHAR(255) NOT NULL, -- translations
  description TEXT, -- translations
  video VARCHAR(255),
  document VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);


-- Table: course_reviews [created]
CREATE TABLE course_reviews (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT NOT NULL,
  student_id INT NOT NULL,
  rating ENUM('1', '2', '3', '4', '5') NOT NULL,
  review TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (course_id) REFERENCES courses(id),
  FOREIGN KEY (student_id) REFERENCES students(id)
);



-- Table: coupons
-- CREATE TABLE coupons (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   code VARCHAR(50) UNIQUE NOT NULL,
--   discount_percentage DECIMAL(5,2) NOT NULL,
--   number_of_use INT NOT NULL,
--   expiry_date DATE,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );



-- Table: course_package
-- CREATE TABLE course_package (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   course_id INT NOT NULL,
--   package_id INT NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (course_id) REFERENCES courses(id),
--   FOREIGN KEY (package_id) REFERENCES packages(id)
-- );

-- Table: offers
-- CREATE TABLE offers (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   description TEXT,
--   discount_percentage DECIMAL(5,2) NOT NULL,
--   start_date DATE,
--   end_date DATE,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- Table: packages
-- CREATE TABLE packages (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL, -- translations
--   description TEXT, -- translations
--   price DECIMAL(10,2) NOT NULL DEFAULT 0,
--   status ENUM('0', '1') DEFAULT '1',
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- Table: questions
-- CREATE TABLE questions (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   course_id INT NOT NULL,
--   question TEXT, -- translations
--   answer TEXT, -- translations
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (course_id) REFERENCES courses(id)
-- );

-- Table: terms
-- CREATE TABLE terms (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   title VARCHAR(255) NOT NULL, -- translations
--   description TEXT, -- translations
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );