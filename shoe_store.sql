-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 22, 2022 lúc 03:18 AM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
 

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shoe_store`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categorys`
--

CREATE TABLE `categorys` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Nike', '2022-11-18 09:43:18', '2022-11-18 09:43:18'),
(2, 'Adidat', '2022-11-18 09:43:23', '2022-11-18 09:43:23'),
(3, 'Pumga', '2022-11-18 09:43:32', '2022-11-18 09:43:32'),
(4, 'Vans', '2022-11-18 09:43:41', '2022-11-18 09:43:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `colordetails`
--

CREATE TABLE `colordetails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idProduct` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idColor` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `colordetails`
--

INSERT INTO `colordetails` (`id`, `idProduct`, `idColor`, `created_at`, `updated_at`) VALUES
(6, '4', '2', '2022-11-18 09:53:48', '2022-11-18 09:53:48'),
(7, '4', '3', '2022-11-18 09:53:48', '2022-11-18 09:53:48'),
(8, '5', '2', '2022-11-18 09:54:41', '2022-11-18 09:54:41'),
(9, '5', '4', '2022-11-18 09:54:41', '2022-11-18 09:54:41'),
(10, '6', '1', '2022-11-18 09:55:45', '2022-11-18 09:55:45'),
(11, '6', '3', '2022-11-18 09:55:45', '2022-11-18 09:55:45'),
(12, '7', '1', '2022-11-18 09:56:48', '2022-11-18 09:56:48'),
(13, '7', '2', '2022-11-18 09:56:48', '2022-11-18 09:56:48'),
(17, '8', '1', '2022-11-18 09:59:04', '2022-11-18 09:59:04'),
(18, '8', '2', '2022-11-18 09:59:04', '2022-11-18 09:59:04'),
(19, '9', '1', '2022-11-18 10:01:19', '2022-11-18 10:01:19'),
(20, '9', '4', '2022-11-18 10:01:19', '2022-11-18 10:01:19'),
(21, '10', '1', '2022-11-18 10:02:22', '2022-11-18 10:02:22'),
(22, '10', '4', '2022-11-18 10:02:22', '2022-11-18 10:02:22'),
(23, '11', '2', '2022-11-18 10:03:34', '2022-11-18 10:03:34'),
(24, '11', '3', '2022-11-18 10:03:34', '2022-11-18 10:03:34'),
(25, '12', '1', '2022-11-18 10:14:21', '2022-11-18 10:14:21'),
(26, '12', '2', '2022-11-18 10:14:21', '2022-11-18 10:14:21'),
(30, '2', '1', '2022-11-20 20:22:14', '2022-11-20 20:22:14'),
(31, '2', '2', '2022-11-20 20:22:14', '2022-11-20 20:22:14'),
(32, '3', '1', '2022-11-21 04:06:02', '2022-11-21 04:06:02'),
(33, '3', '2', '2022-11-21 04:06:02', '2022-11-21 04:06:02'),
(34, '3', '3', '2022-11-21 04:06:02', '2022-11-21 04:06:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `colors`
--

CREATE TABLE `colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `colors`
--

INSERT INTO `colors` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'black', '2022-11-18 09:41:25', '2022-11-18 09:41:51'),
(2, 'red', '2022-11-18 09:42:04', '2022-11-18 09:42:04'),
(3, 'yellow', '2022-11-18 09:42:23', '2022-11-18 09:42:23'),
(4, 'pink', '2022-11-18 09:42:31', '2022-11-18 09:42:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `members`
--

CREATE TABLE `members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2022_10_25_171616_create_table_products', 1),
(3, '2022_11_04_015828_create_table_sizes', 1),
(4, '2022_11_04_021315_create_table_color', 1),
(5, '2022_11_15_040418_create_table_category', 1),
(6, '2022_11_15_074358_create_color_details_table', 1),
(7, '2022_11_15_074617_create_size_details_table', 1),
(8, '2022_11_16_163945_create_oders_table', 1),
(9, '2022_11_16_164109_create_oder_details_table', 1),
(10, '2022_11_16_164142_create_members_table', 1),
(11, '2022_11_20_040526_create_table_oder', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oder`
--

CREATE TABLE `oder` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `memberID` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `memberName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `oderdetails`
--

CREATE TABLE `oderdetails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productID` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `oderID` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `colorID` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sizeID` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `image01` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image02` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` int(11) NOT NULL,
  `categorySlug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `image01`, `image02`, `qty`, `categorySlug`, `description`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Giày thể thao Nike Quest 3 chính hãng full box1', 1000.00, 'images/giay-nike-air-jordan-1-low-white-wolf-grey-rep-11-P2100-1635498348913.jpg87aea366-c7a4-4354-878f-0bb9857e742e', 'images/7dcbc4160d3282a6d858b0072fa02ebb.jpg_525x525q80.jpgb8d83d3c-d871-44ef-a2e5-123803ac3ba0', 20, '1', 'Giày thể thao Nike Quest 3 chính hãng full box', 1, '2022-11-18 09:52:12', '2022-11-20 20:22:14'),
(3, 'Giày_Nike Trắng , Giày_Nike Air Force 1 Trắng Cao Cấp', 1000.00, 'images/giay-air-jordan-1-low-unc-co-thap-trang-xanh-duong.jpg4be6f72f-f70c-4cec-bfb0-1c4ba84622b5', 'images/Nike-Air-Jordan-1-Low-UNC-3.jpgf32f5b25-7751-4bba-9f28-a089121bcc86', 20, '1', 'Giày_Nike Trắng , Giày_Nike Air Force 1 Trắng Cao Cấp', 1, '2022-11-18 09:53:12', '2022-11-21 04:06:02'),
(4, 'Giày_Nike Trắng , Giày_Nike Air Force 1 Trắng Cao Cấp', 1000.00, 'images/nike-af1-cao-co-trang-replica-2.jpga8a63cc3-4fa3-4807-b14a-df5f45ccf797', 'images/giay-nike-air-force-1-cao-co-trang-rep-1-1-dep-chat-2.jpgfcdd7fdf-52cb-443f-86c7-8d871c8b88e9', 20, '1', 'Giày_Nike Trắng , Giày_Nike Air Force 1 Trắng Cao Cấp', 1, '2022-11-18 09:53:48', '2022-11-18 09:53:48'),
(5, 'Giày Running , Giày Thể Thao nam Nike pegasus', 1000.00, 'images/giay-nike-air-force-1-low-off-white-university-gold-sieu-cap-4.jpgc34ff7fa-c6a2-47be-999b-94dddf65bf43', 'images/Lv1.jpg42644aa7-deed-4c49-ae7c-b30fea798cbc', 15, '1', 'Giày Running , Giày Thể Thao nam Nike pegasus', 1, '2022-11-18 09:54:41', '2022-11-18 09:54:41'),
(6, 'Giày _Nike SB Dunk Black 2021 Full Size', 1000.00, 'images/doi-giay-dan-duong-pho-dang-hong-se-ra-mat-trong-tuan-toi_817.jpg7672354b-97c7-4e21-a297-0caccb68241b', 'images/Giày-Nike-Zoom-nam-F13-màu-đen.jpg746ba40e-530c-4a6e-af25-39158e3d081e', 20, '1', 'Giày _Nike SB Dunk Black 2021 Full Size', 1, '2022-11-18 09:55:45', '2022-11-18 09:55:45'),
(7, 'Giày Vans Old Skool, Giày Sneaker Vans', 1000.00, 'images/Giày-Nike-Zoom-nam-F13-màu-đen.jpg587cb47a-35ec-4155-a8f9-ad84dee8743c', 'images/giay-nike-running-nam-revolution-6-2.jpgf28026a3-ea9b-4d58-8479-bc6d4eed29be', 20, '4', 'Giày Vans Old Skool, Giày Sneaker Vans', 1, '2022-11-18 09:56:48', '2022-11-18 09:56:48'),
(8, 'GIÀY 𝐕𝐀𝐍𝐒 OLD SKOOL MÀU ĐEN', 1000.00, 'images/giay-air-jordan-1-low-unc-co-thap-trang-xanh-duong.jpg533490c1-1541-429e-94d7-3c49b9b9011f', 'images/Nike-Air-Jordan-1-Low-UNC-3.jpg6e378a29-8ca1-418e-9265-6eee884e30a7', 20, '4', 'GIÀY 𝐕𝐀𝐍𝐒 OLD SKOOL MÀU ĐEN', 1, '2022-11-18 09:59:04', '2022-11-18 09:59:04'),
(9, 'Giày Adidas Superstar bản mới nhất 2022', 1000.00, 'images/doi-giay-dan-duong-pho-dang-hong-se-ra-mat-trong-tuan-toi_817.jpg964a4f72-5647-4e1f-8113-2d5417e0d438', 'images/giay-nike-running-nam-revolution-6-2.jpg68fe2b89-3948-4d58-8fda-597972285786', 20, '2', 'Giày Adidas Superstar bản mới nhất 2022', 1, '2022-11-18 10:01:19', '2022-11-18 10:01:19'),
(10, 'Giày Sneaker _Adidas Superstar', 1000.00, 'images/giay-air-jordan-1-low-unc-co-thap-trang-xanh-duong.jpg617ef678-f338-4b9a-a692-3e184a57fd56', 'images/giay-nike-air-jordan-1-low-white-wolf-grey-rep-11-P2100-1635498348913.jpgbd121ed9-6b04-45fd-9576-fea7d39cbedd', 20, '2', 'Giày Sneaker _Adidas Superstar', 1, '2022-11-18 10:02:22', '2022-11-18 10:02:22'),
(11, 'Giày thể thao Sneaker Puma Bari Mule', 1000.00, 'images/nike-af1-cao-co-trang-replica-2.jpg49511449-274d-4926-b24b-7e490ab033ce', 'images/giay-nike-air-force-1-cao-co-trang-rep-1-1-dep-chat-2.jpg5702c7d9-d3e1-479d-b0f5-b2a3eda87559', 20, '3', 'Giày thể thao Sneaker Puma Bari Mule', 1, '2022-11-18 10:03:34', '2022-11-18 10:03:34'),
(12, 'Giày thể thao Sneaker Puma parsiasa', 1000.00, 'images/doi-giay-dan-duong-pho-dang-hong-se-ra-mat-trong-tuan-toi_817.jpge8d4544b-3fe9-4786-82c4-e1060c6fddc4', 'images/giay-nike-running-nam-revolution-6-2.jpgdd6338a2-97ba-4ec3-b89a-43c7de38b3a8', 10, '3', 'Giày thể thao Sneaker Puma parsiasa', 1, '2022-11-18 10:14:21', '2022-11-18 10:14:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sizedetails`
--

CREATE TABLE `sizedetails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idProduct` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idSize` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sizedetails`
--

INSERT INTO `sizedetails` (`id`, `idProduct`, `idSize`, `created_at`, `updated_at`) VALUES
(8, '4', '1', '2022-11-18 09:53:48', '2022-11-18 09:53:48'),
(9, '4', '3', '2022-11-18 09:53:48', '2022-11-18 09:53:48'),
(10, '4', '4', '2022-11-18 09:53:48', '2022-11-18 09:53:48'),
(11, '5', '2', '2022-11-18 09:54:41', '2022-11-18 09:54:41'),
(12, '5', '3', '2022-11-18 09:54:41', '2022-11-18 09:54:41'),
(13, '5', '4', '2022-11-18 09:54:41', '2022-11-18 09:54:41'),
(14, '6', '4', '2022-11-18 09:55:45', '2022-11-18 09:55:45'),
(15, '6', '5', '2022-11-18 09:55:45', '2022-11-18 09:55:45'),
(16, '6', '6', '2022-11-18 09:55:45', '2022-11-18 09:55:45'),
(17, '7', '1', '2022-11-18 09:56:48', '2022-11-18 09:56:48'),
(18, '7', '3', '2022-11-18 09:56:48', '2022-11-18 09:56:48'),
(22, '8', '1', '2022-11-18 09:59:04', '2022-11-18 09:59:04'),
(23, '8', '2', '2022-11-18 09:59:04', '2022-11-18 09:59:04'),
(24, '9', '1', '2022-11-18 10:01:19', '2022-11-18 10:01:19'),
(25, '9', '2', '2022-11-18 10:01:19', '2022-11-18 10:01:19'),
(26, '10', '1', '2022-11-18 10:02:22', '2022-11-18 10:02:22'),
(27, '10', '3', '2022-11-18 10:02:22', '2022-11-18 10:02:22'),
(28, '11', '2', '2022-11-18 10:03:34', '2022-11-18 10:03:34'),
(29, '11', '4', '2022-11-18 10:03:34', '2022-11-18 10:03:34'),
(30, '12', '3', '2022-11-18 10:14:21', '2022-11-18 10:14:21'),
(31, '12', '4', '2022-11-18 10:14:21', '2022-11-18 10:14:21'),
(35, '2', '1', '2022-11-20 20:22:14', '2022-11-20 20:22:14'),
(36, '2', '2', '2022-11-20 20:22:14', '2022-11-20 20:22:14'),
(37, '3', '1', '2022-11-21 04:06:02', '2022-11-21 04:06:02'),
(38, '3', '2', '2022-11-21 04:06:02', '2022-11-21 04:06:02'),
(39, '3', '3', '2022-11-21 04:06:02', '2022-11-21 04:06:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sizes`
--

CREATE TABLE `sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sizes`
--

INSERT INTO `sizes` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, '31', '2022-11-18 09:42:44', '2022-11-18 09:42:44'),
(2, '32', '2022-11-18 09:42:47', '2022-11-18 09:42:47'),
(3, '33', '2022-11-18 09:42:51', '2022-11-18 09:42:51'),
(4, '34', '2022-11-18 09:42:55', '2022-11-18 09:42:55'),
(5, '35', '2022-11-18 09:42:59', '2022-11-18 09:42:59'),
(6, '36', '2022-11-18 09:43:02', '2022-11-18 09:43:02');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `colordetails`
--
ALTER TABLE `colordetails`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oder`
--
ALTER TABLE `oder`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `oderdetails`
--
ALTER TABLE `oderdetails`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sizedetails`
--
ALTER TABLE `sizedetails`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `colordetails`
--
ALTER TABLE `colordetails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `colors`
--
ALTER TABLE `colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `members`
--
ALTER TABLE `members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `oder`
--
ALTER TABLE `oder`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `oderdetails`
--
ALTER TABLE `oderdetails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `sizedetails`
--
ALTER TABLE `sizedetails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
