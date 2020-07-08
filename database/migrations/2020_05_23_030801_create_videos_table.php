<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('title_logo')->default('https://via.placeholder.com/612x260');
            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')->references('id')->on('categories');
//            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->string('description')->nullable();
            $table->string('cover')->default('https://via.placeholder.com/1280x720');
            $table->string('boxart_image')->default('https://via.placeholder.com/341x192');
            $table->string('bob_background')->default('https://via.placeholder.com/720x394');
            $table->string('jawbone_title_logo')->default('https://via.placeholder.com/550x124');
            $table->string('ptrack_content_image')->default('https://via.placeholder.com/848x477');
            $table->unsignedFloat('duration')->default(100);
            $table->string('source')->nullable();
            $table->unsignedFloat('rating')->default(5);
            $table->unsignedInteger('price')->nullable();
            $table->unsignedBigInteger('views')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
    }
}
